import React from 'react';
import Layout from '@theme/Layout';
import BanAppealForm from '@site/src/components/BanAppealForm';
import styles from './ban-appeal.module.css';

export default function BanAppeal() {
  return (
    <Layout
      title="Ban Appeal"
      description="Dien een ban appeal in voor Azurite"
    >
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>📋 <span className={styles.blueText}>Ban Appeal</span></h1>
            <p className={styles.subtitle}>
              Ben je onterecht gebanned of wil je een tweede kans? Vul het onderstaande formulier in.
            </p>
          </div>

          <div className={styles.infoBox}>
            <h3>⚠️ Belangrijke info!</h3>
            <ul>
              <li>Wees eerlijk in je appeal - liegen vermindert je kansen. Elke perm ban die we hebben vastgesteld wordt opgeslagen met alle data langs onze kant.</li>
              <li>Je appeal wordt binnen <strong>7 dagen</strong> behandeld.</li>
              <li>Je ontvangt een reactie via Discord DM van een van onze moderators.</li>
              <li>Spam niet met meerdere appeals - dit kan leiden tot permanente afwijzing!</li>
            </ul>
          </div>

          <BanAppealForm />

          <div className={styles.footer}>
            <p>
              Je appeal wordt binnen de 7 dagen behandeld. Je ontvangt een reactie via Discord DM.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
