import React, { useState } from 'react';
import styles from './styles.module.css';

export default function ServerStatus() {
  const [status] = useState({
    online: true,
    players: '0/32',
    queue: 0,
  });

  return (
    <section className={styles.statusSection}>
      <div className="container">
        <div className={styles.statusContainer}>
          <div className={styles.statusHeader}>
            <h2 className={styles.statusTitle}>Server Status</h2>
            <div className={styles.statusBadge}>
              <span className={`${styles.statusDot} ${status.online ? styles.online : styles.offline}`}></span>
              <span className={styles.statusText}>
                {status.online ? 'Online' : 'Offline'}
              </span>
            </div>
          </div>
          
          <div className={styles.statusGrid}>
            <div className={styles.statBox}>
              <div className={styles.statIcon}>👥</div>
              <div className={styles.statInfo}>
                <div className={styles.statValue}>{status.players}</div>
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
              <code className={styles.connectCode}>connect cfx.re/join/azurite</code>
            </div>
            <button 
              className={styles.connectButton}
              onClick={() => window.open('fivem://connect/cfx.re/join/azurite', '_blank')}
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
