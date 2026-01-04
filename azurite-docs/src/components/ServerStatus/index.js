import React, { useState, useEffect, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './styles.module.css';

const ServerStatusContent = React.memo(function ServerStatusContent() {
  const [status] = useState({
    online: true,
    players: '0/32',
    queue: 0,
  });
  
  const [isVisible, setIsVisible] = useState(true);
  const statusRef = useRef(null);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;
    
    // Fallback timeout in case IntersectionObserver doesn't fire
    const fallbackTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallbackTimeout);
        }
      },
      { threshold: 0.1 }
    );

    if (statusRef.current) {
      observer.observe(statusRef.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimeout);
    };
  }, []);

  return (
    <section className={styles.statusSection} ref={statusRef}>
      <div className="container">
        <div className={`${styles.statusContainer} ${isVisible ? styles.statusContainerVisible : ''}`}>
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
            <div className={`${styles.statBox} ${isVisible ? styles.statBoxVisible : ''}`} style={{animationDelay: '0.1s'}}>
              <div className={styles.statIcon}>👥</div>
              <div className={styles.statInfo}>
                <div className={styles.statValue}>{status.players}</div>
                <div className={styles.statLabel}>Spelers Online</div>
              </div>
            </div>
            
            <div className={`${styles.statBox} ${isVisible ? styles.statBoxVisible : ''}`} style={{animationDelay: '0.2s'}}>
              <div className={styles.statIcon}>⏱️</div>
              <div className={styles.statInfo}>
                <div className={styles.statValue}>{status.queue}</div>
                <div className={styles.statLabel}>In Queue</div>
              </div>
            </div>
            
            <div className={`${styles.statBox} ${isVisible ? styles.statBoxVisible : ''}`} style={{animationDelay: '0.3s'}}>
              <div className={styles.statIcon}>🌐</div>
              <div className={styles.statInfo}>
                <div className={styles.statValue}>24/7</div>
                <div className={styles.statLabel}>Uptime</div>
              </div>
            </div>
            
            <div className={`${styles.statBox} ${isVisible ? styles.statBoxVisible : ''}`} style={{animationDelay: '0.4s'}}>
              <div className={styles.statIcon}>🔄</div>
              <div className={styles.statInfo}>
                <div className={styles.statValue}>3x</div>
                <div className={styles.statLabel}>Daily Restarts</div>
              </div>
            </div>
          </div>

          <div className={`${styles.connectSection} ${isVisible ? styles.connectSectionVisible : ''}`}>
            <div className={styles.connectInfo}>
              <p className={styles.connectLabel}>Connect via FiveM</p>
              <code className={styles.connectCode}>connect cfx.re/join/azurite</code>
            </div>
            <button 
              className={styles.connectButton}
              onClick={() => {
                if (ExecutionEnvironment.canUseDOM && window) {
                  window.open('fivem://connect/cfx.re/join/azurite', '_blank');
                }
              }}
            >
              <span className={styles.buttonIcon}>🎮</span>
              Direct Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default function ServerStatus() {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => <ServerStatusContent />}
    </BrowserOnly>
  );
}
