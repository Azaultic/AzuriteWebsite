import clsx from 'clsx';
import Heading from '@theme/Heading';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './styles.module.css';
import { useEffect, useRef, useState } from 'react';

const FeatureList = [
  {
    title: '🎮 Actieve Community',
    description: (
      <>
        Word deel van een groeiende community van FiveM spelers. 
        Met dagelijkse events, actieve staff en een vriendelijke omgeving 
        is er altijd iets te beleven in Azurite.
      </>
    ),
  },
  {
    title: '📋 Duidelijke Regels',
    description: (
      <>
        Onze server draait op respect en fairplay. Met duidelijke regels 
        en een actief staffteam zorgen we ervoor dat iedereen een 
        geweldige ervaring heeft.
      </>
    ),
  },
  {
    title: '💰 Balanced Economy',
    description: (
      <>
        Een goed uitgebalanceerde economie waar hard werken beloond wordt. 
        Verdien geld door legaal werk, of waag je aan de onderwereld, 
        de keuze is aan jou.
      </>
    ),
  },
];

function Feature({title, description, index}) {
  const [isVisible, setIsVisible] = useState(false);
  const featureRef = useRef(null);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={clsx('col col--4')} ref={featureRef}>
      <div 
        className={clsx(styles.featureCard, isVisible && styles.featureCardVisible)}
        style={{ animationDelay: `${index * 0.15}s` }}
      >
        <div className="text--center padding-horiz--md">
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM || typeof IntersectionObserver === 'undefined') {
      setIsTitleVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--lg" ref={titleRef}>
          <Heading as="h2" className={clsx(styles.sectionTitle, isTitleVisible && styles.sectionTitleVisible)}>
            Waarom Azurite?
          </Heading>
          <p className={clsx(styles.sectionSubtitle, isTitleVisible && styles.sectionSubtitleVisible)}>
            Ontdek wat onze FiveM server uniek maakt
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
