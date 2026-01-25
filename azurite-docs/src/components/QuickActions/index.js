import React, { useState, useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './styles.module.css';

const quickActions = [
  {
    icon: '🎮',
    title: 'Instant Connecten',
    description: 'Start FiveM en connect naar onze server',
    link: 'fivem://connect/play.azurite.info',
    buttonText: 'Connect',
    external: true,
  },
  {
    icon: '💎',
    title: 'Introductie',
    description: 'Leer alles over onze server en regels',
    link: '/docs/introductie',
    buttonText: 'Lezen',
    external: false,
  },
  {
    icon: '📝',
    title: 'Whitelist',
    description: 'Check alle info over onze whitelist procedure',
    link: '/docs/whitelist-info',
    buttonText: 'Info',
    external: false,
  },
  {
    icon: '📚',
    title: 'Vragen?',
    description: 'Bekijk de FAQ of neem contact op via onze discord',
    link: '/docs/faq',
    buttonText: 'FAQ',
    external: false,
  },
];

function ActionCard({ action, index, isVisible }) {
  const handleClick = (e) => {
    if (action.external && action.link.startsWith('fivem://')) {
      e.preventDefault();
      if (ExecutionEnvironment.canUseDOM && window) {
        window.location.href = action.link;
      }
    }
  };

  const CardWrapper = action.external ? 'a' : Link;
  const cardProps = action.external 
    ? { href: action.link, onClick: handleClick, target: '_blank', rel: 'noopener noreferrer' }
    : { to: action.link };

  return (
    <CardWrapper 
      {...cardProps}
      className={`${styles.actionCard} ${action.highlight ? styles.highlighted : ''} ${isVisible ? styles.visible : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>{action.icon}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{action.title}</h3>
        <p className={styles.description}>{action.description}</p>
      </div>
      <div className={styles.buttonWrapper}>
        <span className={styles.button}>
          {action.buttonText}
          <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </CardWrapper>
  );
}

export default function QuickActions() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;

    const timer = setTimeout(() => setIsVisible(true), 100);

    if (typeof IntersectionObserver !== 'undefined' && sectionRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(sectionRef.current);
      return () => {
        observer.disconnect();
        clearTimeout(timer);
      };
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={`${styles.header} ${isVisible ? styles.headerVisible : ''}`}>
          <h2 className={styles.sectionTitle}>Snel Starten</h2>
          <p className={styles.sectionSubtitle}>Alles wat je nodig hebt om te beginnen</p>
        </div>
        <div className={styles.grid}>
          {quickActions.map((action, index) => (
            <ActionCard 
              key={action.title} 
              action={action} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
