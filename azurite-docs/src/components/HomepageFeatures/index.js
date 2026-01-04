import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🎮 Actieve Community',
    description: (
      <>
        Word deel van een groeiende community van FiveM spelers. 
        Met dagelijkse events, actieve staff en een vriendelijke omgeving 
        is er altijd iets te beleven in Azurite RP.
      </>
    ),
  },
  // {
  //   title: '🚓 Whitelisted Jobs',
  //   description: (
  //     <>
  //       Kies uit diverse carrièrepaden zoals politie, EMS, mechanics en meer. 
  //       Elke job heeft unieke features en mogelijkheden om je roleplay ervaring 
  //       naar een hoger niveau te tillen.
  //     </>
  //   ),
  // },
  // {
  //   title: '💎 Custom Scripts',
  //   description: (
  //     <>
  //       Geniet van volledig custom scripts en features die je nergens anders vindt. 
  //       Van unieke voertuigen tot custom locaties, we blijven de server 
  //       continu verbeteren.
  //     </>
  //   ),
  // },
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
  // {
  //   title: '🔧 Actieve Development',
  //   description: (
  //     <>
  //       Ons dev team werkt constant aan nieuwe features en improvements. 
  //       Feedback van de community wordt serieus genomen en regelmatig 
  //       geïmplementeerd in updates.
  //     </>
  //   ),
  // },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center padding-horiz--md">
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2" className={styles.sectionTitle}>
            Waarom Azurite RP?
          </Heading>
          <p className={styles.sectionSubtitle}>
            Ontdek wat onze FiveM server uniek maakt
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
