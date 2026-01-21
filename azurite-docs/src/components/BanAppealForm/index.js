import React, { useState } from 'react';
import styles from './styles.module.css';

const WORKER_URL = 'https://lively-shape-5d4b.azuritebe.workers.dev';

export default function BanAppealForm() {
  const [formData, setFormData] = useState({
    discordName: '',
    discordId: '',
    ingameName: '',
    banReason: '',
    appealReason: '',
    extraInfo: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Validatie
    if (!formData.discordName || !formData.discordId || !formData.ingameName || !formData.banReason || !formData.appealReason) {
      setStatus({ type: 'error', message: 'Vul alle verplichte velden in!' });
      setIsSubmitting(false);
      return;
    }

    // Discord Embed
    const embed = {
      title: '📋 Nieuwe Ban Appeal',
      color: 0x5865f2, // Discord Blurple
      fields: [
        {
          name: '👤 Discord Naam',
          value: formData.discordName,
          inline: true,
        },
        {
          name: '🆔 Discord ID',
          value: formData.discordId,
          inline: true,
        },
        {
          name: '🎮 In-game Naam',
          value: formData.ingameName,
          inline: true,
        },
        {
          name: '⛔ Ban Reden',
          value: formData.banReason,
          inline: false,
        },
        {
          name: '📝 Reden voor Appeal',
          value: formData.appealReason,
          inline: false,
        },
        {
          name: '📎 Extra Informatie',
          value: formData.extraInfo || 'Geen extra informatie opgegeven.',
          inline: false,
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: 'Azurite Ban Appeal System',
      },
    };

    try {
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          discordName: formData.discordName,
          discordId: formData.discordId,
          ingameName: formData.ingameName,
          banReason: formData.banReason,
          appealReason: formData.appealReason,
          extraInfo: formData.extraInfo,
        }),
      });

      const responseData = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus({
          type: 'success',
          message: '✅ Je ban appeal is succesvol verzonden! We nemen zo snel mogelijk contact met je op.',
        });
        setFormData({
          discordName: '',
          discordId: '',
          ingameName: '',
          banReason: '',
          appealReason: '',
          extraInfo: '',
        });
      } else {
        console.error('Worker response error:', response.status, responseData);
        throw new Error(responseData.error || `Worker failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Ban appeal error:', error);
      setStatus({
        type: 'error',
        message: `❌ Er is iets misgegaan. Probeer het later opnieuw of neem contact op via Discord. (${error.message})`,
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <div className={styles.formGroup}>
          <label htmlFor="discordName">
            Discord Naam <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="discordName"
            name="discordName"
            value={formData.discordName}
            onChange={handleChange}
            placeholder="Bijv. JanGamert#1234"
            className={styles.input}
            autoComplete="off"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="discordId">
            Discord ID <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="discordId"
            name="discordId"
            value={formData.discordId}
            onChange={handleChange}
            placeholder="Bijv. 123456789012345678"
            className={styles.input}
            autoComplete="off"
          />
          <small className={styles.hint}>
            Weet je niet hoe je je Discord ID vindt? Zet Developer Mode aan in Discord instellingen.
          </small>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="ingameName">
            In-game Naam <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="ingameName"
            name="ingameName"
            value={formData.ingameName}
            onChange={handleChange}
            placeholder="Je karakter naam in de server"
            className={styles.input}
            autoComplete="off"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="banReason">
            Waarom ben je gebanned? <span className={styles.required}>*</span>
          </label>
          <textarea
            id="banReason"
            name="banReason"
            value={formData.banReason}
            onChange={handleChange}
            placeholder="Beschrijf de reden van je ban zoals deze aan je is gecommuniceerd"
            className={styles.textarea}
            rows={3}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="appealReason">
            Waarom zou je unban moeten krijgen? <span className={styles.required}>*</span>
          </label>
          <textarea
            id="appealReason"
            name="appealReason"
            value={formData.appealReason}
            onChange={handleChange}
            placeholder="Leg uit waarom je denkt dat je een tweede kans verdient"
            className={styles.textarea}
            rows={4}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="extraInfo">Extra Informatie (optioneel)</label>
          <textarea
            id="extraInfo"
            name="extraInfo"
            value={formData.extraInfo}
            onChange={handleChange}
            placeholder="Eventuele extra informatie die je wilt delen"
            className={styles.textarea}
            rows={3}
          />
        </div>

        {status.message && (
          <div className={`${styles.status} ${styles[status.type]}`}>
            {status.message}
          </div>
        )}

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Verzenden...' : '📨 Verstuur Ban Appeal'}
        </button>
      </form>
    </div>
  );
}
