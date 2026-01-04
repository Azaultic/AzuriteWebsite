# FiveM Server Integratie - Handleiding

## 📋 Overzicht

Je FiveM server is nu geïntegreerd in de website! De `ServerStatus` component haalt automatisch live data van je server en toont:
- Online/Offline status
- Aantal spelers online
- Maximum spelers
- Direct connect functionaliteit

## ⚙️ Configuratie

### 1. Server Instellingen Aanpassen

Open het bestand `src/config/server.config.js` en pas de volgende instellingen aan:

```javascript
const serverConfig = {
  // Je server adres
  serverAddress: 'azurite', // Vervang door jouw CFX.re join code of IP
  
  // Server type: 'cfx' voor CFX.re servers, 'direct' voor IP
  serverType: 'cfx',
  
  // FiveM connect link voor de Direct Connect knop
  connectLink: 'fivem://connect/cfx.re/join/48bkgv',
  
  // Hoe vaak de status wordt ververst (in milliseconden)
  refreshInterval: 30000, // 30 seconden
  
  // Standaard max spelers
  defaultMaxPlayers: 32,
};
```

### 2. Voorbeelden

#### CFX.re Server (aanbevolen)
```javascript
serverAddress: 'azurite',
serverType: 'cfx',
connectLink: 'fivem://connect/cfx.re/join/48bkgv',
```

#### Direct IP Server
```javascript
serverAddress: '123.456.789.0:30120',
serverType: 'direct',
connectLink: 'fivem://connect/123.456.789.0:30120',
```

## 🚀 Gebruik

### De Website Lokaal Testen

1. **Installeer dependencies** (als je dit nog niet hebt gedaan):
```bash
npm install
```

2. **Start de development server**:
```bash
npm start
```

3. **Open je browser** naar `http://localhost:3000`

De ServerStatus component wordt automatisch geladen op de homepage en toont de live status van je server.

## 🔄 Hoe het Werkt

1. **Bij laden**: De component haalt direct de server status op
2. **Auto-refresh**: Elke 30 seconden (of zoals geconfigureerd) wordt de status bijgewerkt
3. **API**: Voor CFX.re servers gebruikt het de FiveM Servers API
4. **Fallback**: Als de server niet bereikbaar is, wordt een offline status getoond

## 🎨 Aanpassingen

### Refresh Interval Aanpassen

Om vaker of minder vaak te refreshen, pas `refreshInterval` aan in `server.config.js`:

```javascript
refreshInterval: 15000, // 15 seconden
refreshInterval: 60000, // 1 minuut
```

### Connect Link Aanpassen

De "Direct Connect" knop opent de FiveM client. Pas dit aan naar je server:

```javascript
connectLink: 'fivem://connect/cfx.re/join/JOUW_SERVER',
```

### Styling Aanpassen

De styles staan in `src/components/ServerStatus/styles.module.css`. Je kunt hier:
- Kleuren aanpassen
- Layout wijzigen
- Animaties toevoegen/verwijderen

## 📡 API Endpoints

### CFX.re Servers
```
https://servers-frontend.fivem.net/api/servers/single/{SERVER_ADDRESS}
```

### Direct IP Servers
```
http://{SERVER_IP}:{PORT+1}/players.json
```
*Let op: Voor direct IP moet je CORS mogelijk configureren op je FiveM server*

## 🐛 Troubleshooting

### Server toont altijd "Offline"

**Mogelijke oorzaken:**
1. Server adres is incorrect in `server.config.js`
2. Server is daadwerkelijk offline
3. CORS issues (bij direct IP servers)
4. Firewall blokkeert de API requests

**Oplossing:**
- Check console errors (F12 in browser)
- Verifieer server adres
- Test de API URL direct in je browser

### Player count klopt niet

**Mogelijke oorzaak:**
De FiveM API geeft soms vertraagde data.

**Oplossing:**
- Verlaag de `refreshInterval` voor frequentere updates
- Check of de API data correct is door de URL direct te bezoeken

### CORS Errors (alleen bij direct IP)

**Oplossing:**
Voeg dit toe aan je FiveM server's `server.cfg`:
```
set sv_enableHttps true
add_ace resource.* command.* allow
```

## 📦 Build voor Productie

Om de website te bouwen voor deployment:

```bash
npm run build
```

De gebouwde bestanden komen in de `build/` folder.

## 🔐 Beveiliging

- De website maakt alleen **read-only** API calls
- Er wordt geen gevoelige data verstuurd
- CFX.re API's zijn publiek toegankelijk (veilig te gebruiken)

## 📞 Hulp Nodig?

Check de volgende bronnen:
- [FiveM API Documentatie](https://docs.fivem.net/docs/scripting-reference/runtimes/javascript/server-functions/)
- [Docusaurus Documentatie](https://docusaurus.io/)
- [React Hooks Gids](https://react.dev/reference/react)

## ✅ Checklist

- [ ] `server.config.js` aangepast met jouw server details
- [ ] Website getest lokaal met `npm start`
- [ ] Server status wordt correct getoond
- [ ] Direct Connect knop werkt
- [ ] Website gebouwd met `npm run build`
- [ ] Gedeployed naar productie

---

**Gemaakt voor Azurite RP** 💎
