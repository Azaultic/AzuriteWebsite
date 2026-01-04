/**
 * FiveM Server Configuratie
 * 
 * Pas deze instellingen aan voor jouw server
 */

const serverConfig = {
  // Je server adres - kan zijn:
  // - CFX.re join code: 'azurite' (voor cfx.re/join/48bkgv)
  // - Direct IP: '123.456.789.0:30120'
  serverAddress: 'azurite',
  
  // Type server connectie
  // 'cfx' voor CFX.re servers
  // 'direct' voor directe IP verbinding
  serverType: 'cfx',
  
  // FiveM connect link (wordt gebruikt voor de Direct Connect knop)
  connectLink: 'fivem://connect/cfx.re/join/48bkgv',
  
  // Server refresh interval in milliseconden (standaard 30 seconden)
  refreshInterval: 60000,
  
  // Standaard max players (wordt overschreven door server data als beschikbaar)
  defaultMaxPlayers: 8,
};

/**
 * Bouw de API URL op basis van server type
 */
export function getServerApiUrl() {
  if (serverConfig.serverType === 'cfx') {
    return `https://servers-frontend.fivem.net/api/servers/single/${serverConfig.serverAddress}`;
  } else {
    // Voor directe IP connecties, gebruik de FiveM API op poort +1
    const [ip, port] = serverConfig.serverAddress.split(':');
    const apiPort = port ? parseInt(port) + 1 : 30121;
    return `http://${ip}:${apiPort}/players.json`;
  }
}

export default serverConfig;
