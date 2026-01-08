import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ServerStatus from '@site/src/components/ServerStatus';
import DiscordWidget from '@site/src/components/DiscordWidget';
import AnimatedBackground from '@site/src/components/AnimatedBackground';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <AnimatedBackground />
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introductie">
            Start 📖
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://discord.gg/F3qr9MC8sC"
            target="_blank"
            rel="noopener noreferrer">
            <img 
              src="/img/discord.svg" 
              alt="Discord" 
              width="20" 
              height="20" 
              style={{marginRight: '8px', verticalAlign: 'middle'}}
            />
            Join Discord
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welkom bij ${siteConfig.title}`}
      description="Officiële documentatie voor Azurite - FiveM Roleplay Server">
      <HomepageHeader />
      <main>
        <ServerStatus />
        <HomepageFeatures />
        <DiscordWidget />
      </main>
    </Layout>
  );
}
