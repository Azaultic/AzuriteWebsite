export default {
  async fetch(request, env) {
    // Get the origin from the request
    const origin = request.headers.get('Origin');
    
    // Allow both www and non-www versions
    const allowedOrigins = [
      'https://azurite.info',
      'https://www.azurite.info'
    ];
    
    const allowOrigin = allowedOrigins.includes(origin) ? origin : 'https://www.azurite.info';
    
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': allowOrigin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight request
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Alleen POST requests toestaan
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    try {
      // Haal de form data op
      const data = await request.json();

      // Validatie
      if (!data.discordName || !data.discordId || !data.ingameName || !data.banReason || !data.appealReason) {
        return new Response(JSON.stringify({ error: 'Vul alle verplichte velden in!' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Discord Embed maken
      const embed = {
        title: '📋 Nieuwe Ban Appeal',
        color: 0x5865f2,
        fields: [
          {
            name: '👤 Discord Naam',
            value: data.discordName,
            inline: true,
          },
          {
            name: '🆔 Discord ID',
            value: data.discordId,
            inline: true,
          },
          {
            name: '🎮 In-game Naam',
            value: data.ingameName,
            inline: true,
          },
          {
            name: '⛔ Ban Reden',
            value: data.banReason,
            inline: false,
          },
          {
            name: '📝 Reden voor Appeal',
            value: data.appealReason,
            inline: false,
          },
          {
            name: '📎 Extra Informatie',
            value: data.extraInfo || 'Geen extra informatie opgegeven.',
            inline: false,
          },
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: 'Azurite Ban Appeal System',
        },
      };

      // Stuur naar Discord webhook (URL uit environment variable)
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
