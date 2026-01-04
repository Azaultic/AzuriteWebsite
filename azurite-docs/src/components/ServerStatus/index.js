import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import serverConfig, { getServerApiUrl } from '@site/src/config/server.config';

export default function ServerStatus() {
  const [status, setStatus] = useState({
    online: false,
    players: `0/${serverConfig.defaultMaxPlayers}`,
    queue: 0,
    maxPlayers: serverConfig.defaultMaxPlayers,
    loading: true,
  });

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const apiUrl = getServerApiUrl();
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error('Server niet bereikbaar');
        }

        const data = await response.json();
        
        // Data uit de FiveM API parsen
        const playerCount = data.Data?.players?.length || 0;
        const maxPlayers = data.Data?.sv_maxclients || serverConfig.defaultMaxPlayers;
        
        setStatus({
          online: true,
          players: `${playerCount}/${maxPlayers}`,
          queue: 0, // FiveM API geeft geen queue info, je kunt dit aanpassen als je een custom queue systeem hebt
          maxPlayers: maxPlayers,
          loading: false,
        });
      } catch (error) {
        console.error('Error fetching server status:', error);
        setStatus({
          online: false,
          players: `0/${serverConfig.defaultMaxPlayers}`,
          queue: 0,
          maxPlayers: serverConfig.defaultMaxPlayers,
          loading: false,
        });
      }
    };

    // Fetch direct bij laden
    fetchServerStatus();

    // Update elke X seconden (gedefinieerd in config)
    const interval = setInterval(fetchServerStatus, serverConfig.refreshInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.statusSection}>
      <div className="container">
        <div className={styles.statusContainer}>
          <div className={styles.statusHeader}>
            <h2 className={styles.statusTitle}>Server Status</h2>
            <div className={styles.statusBadge}>
              <span className={`${styles.statusDot} ${status.loading ? styles.loading : status.online ? styles.online : styles.offline}`}></span>
              <span className={styles.statusText}>
                {status.loading ? 'Laden...' : status.online ? 'Online' : 'Offline'}
              </span>
            </div>
          </div>
          
          <div className={styles.statusGrid}>
            <div className={styles.statBox}>
              <div className={styles.statIcon}>👥</div>
              <div className={styles.statInfo}>
                <div className={styles.statValue}>
                  {status.loading ? '...' : status.players}
                </div>
                <div className={styles.statLabel}>Spelers Online</div>
              </div>
            </div>
            
            <div className={styles.statBox}>
              <div className={styles.statIcon}>⏱️</div>
              <div className={styles.statInfo}>
                <div className={styles.statValue}>{status.queue}</div>
                <div className={styles.statLabel}>In Queue</div>
              </div>
            </div>
            
            <div className={styles.statBox}>
              <div className={styles.statIcon}>🌐</div>
              <div className={styles.statInfo}>
                <div className={styles.statValue}>24/7</div>
                <div className={styles.statLabel}>Uptime</div>
              </div>
            </div>
            
            <div className={styles.statBox}>
              <div className={styles.statIcon}>🔄</div>
              <div className={styles.statInfo}>
                <div className={styles.statValue}>3x</div>
                <div className={styles.statLabel}>Daily Restarts</div>
              </div>
            </div>
          </div>

          <div className={styles.connectSection}>
            <div className={styles.connectInfo}>
              <p className={styles.connectLabel}>Connect via FiveM</p>
              <code className={styles.connectCode}>
                connect cfx.re/join/{serverConfig.serverAddress}
              </code>
            </div>
            <button 
              className={styles.connectButton}
              onClick={() => window.open(serverConfig.connectLink, '_blank')}
            >
              <span className={styles.buttonIcon}>🎮</span>
              Direct Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
