const RATE_LIMIT_WINDOW = 3600; // 1 uur
const MAX_REQUESTS_PER_WINDOW = 3; // Max 3 appeals per uur per ip

const INPUT_LIMITS = {
  discordName: 100,
  discordId: 20,
  ingameName: 100,
  banReason: 500,
  appealReason: 2000,
  extraInfo: 1000,
};

function sanitizeInput(str, maxLength) {
  if (!str || typeof str !== 'string') return '';
  return str
    .slice(0, maxLength)
    .replace(/[<>]/g, '')
    .replace(/@everyone|@here/gi, '[mention removed]')
    .trim();
}

async function checkRateLimit(ip, env) {
  if (!env.RATE_LIMIT) {
    console.warn('RATE_LIMIT KV not configured - rate limiting disabled');
    return { allowed: true };
  }

  const key = `ratelimit:${ip}`;
  const now = Date.now();
  
  try {
    const data = await env.RATE_LIMIT.get(key, { type: 'json' });
    
    if (!data) {
      await env.RATE_LIMIT.put(key, JSON.stringify({ count: 1, firstRequest: now }), {
        expirationTtl: RATE_LIMIT_WINDOW,
      });
      return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1 };
    }

    if (data.count >= MAX_REQUESTS_PER_WINDOW) {
      const resetTime = Math.ceil((data.firstRequest + RATE_LIMIT_WINDOW * 1000 - now) / 1000 / 60);
      return { allowed: false, resetInMinutes: resetTime };
    }

    await env.RATE_LIMIT.put(key, JSON.stringify({ ...data, count: data.count + 1 }), {
      expirationTtl: RATE_LIMIT_WINDOW,
    });
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - data.count - 1 };
  } catch (error) {
    console.error('Rate limit error:', error);
    return { allowed: true };
  }
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin');
    
    const allowedOrigins = [
      'https://azurite.info',
      'https://www.azurite.info'
    ];
    
    if (!allowedOrigins.includes(origin)) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    const corsHeaders = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';
    const rateLimit = await checkRateLimit(clientIP, env);
    
    if (!rateLimit.allowed) {
      return new Response(JSON.stringify({ 
        error: `Je hebt te veel appeals verstuurd. Probeer het over ${rateLimit.resetInMinutes} minuten opnieuw.` 
      }), {
        status: 429,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json',
          'Retry-After': String(rateLimit.resetInMinutes * 60),
        },
      });
    }

    try {
      const data = await request.json();

      if (!data.discordName || !data.discordId || !data.ingameName || !data.banReason || !data.appealReason) {
        return new Response(JSON.stringify({ error: 'Vul alle verplichte velden in!' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const sanitizedData = {
        discordName: sanitizeInput(data.discordName, INPUT_LIMITS.discordName),
        discordId: sanitizeInput(data.discordId, INPUT_LIMITS.discordId).replace(/\D/g, ''), // Alleen cijfers
        ingameName: sanitizeInput(data.ingameName, INPUT_LIMITS.ingameName),
        banReason: sanitizeInput(data.banReason, INPUT_LIMITS.banReason),
        appealReason: sanitizeInput(data.appealReason, INPUT_LIMITS.appealReason),
        extraInfo: sanitizeInput(data.extraInfo, INPUT_LIMITS.extraInfo),
      };

      if (!sanitizedData.discordName || !sanitizedData.discordId || !sanitizedData.ingameName) {
        return new Response(JSON.stringify({ error: 'Ongeldige input gedetecteerd.' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      if (!/^\d{17,20}$/.test(sanitizedData.discordId)) {
        return new Response(JSON.stringify({ error: 'Ongeldig Discord ID formaat.' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const embed = {
        title: '📋 Nieuwe Ban Appeal',
        color: 0x5865f2,
        fields: [
          {
            name: '👤 Discord Naam',
            value: sanitizedData.discordName || 'Niet opgegeven',
            inline: true,
          },
          {
            name: '🆔 Discord ID',
            value: sanitizedData.discordId || 'Niet opgegeven',
            inline: true,
          },
          {
            name: '🎮 In-game Naam',
            value: sanitizedData.ingameName || 'Niet opgegeven',
            inline: true,
          },
          {
            name: '⛔ Ban Reden',
            value: sanitizedData.banReason || 'Niet opgegeven',
            inline: false,
          },
          {
            name: '📝 Reden voor Appeal',
            value: sanitizedData.appealReason || 'Niet opgegeven',
            inline: false,
          },
          {
            name: '📎 Extra Informatie',
            value: sanitizedData.extraInfo || 'Geen extra informatie opgegeven.',
            inline: false,
          },
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: `Azurite Ban Appeal System | IP: ${clientIP.slice(0, 8)}***`,
        },
      };

      const webhookResponse = await fetch(env.DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [embed],
        }),
      });

      if (webhookResponse.ok) {
        return new Response(JSON.stringify({ success: true, message: 'Appeal verzonden!' }), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      } else {
        throw new Error('Discord webhook failed');
      }
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Er is iets misgegaan. Probeer het later opnieuw.' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};
