import React, { useMemo } from 'react';
import styles from './styles.module.css';

// Seeded random function for consistent SSR/client rendering
function seededRandom(seed) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

const AnimatedBackground = React.memo(function AnimatedBackground() {
  // Create multiple floating particles with consistent positions
  const particles = useMemo(() => Array.from({ length: 5 }, (_, i) => ({
    id: i,
    left: `${seededRandom(i * 3) * 100}%`,
    animationDelay: `${seededRandom(i * 3 + 1) * 20}s`,
    animationDuration: `${15 + seededRandom(i * 3 + 2) * 10}s`,
    size: `${2 + seededRandom(i * 3 + 3) * 4}px`,
  })), []);

  // Glow orbs - ambient floating lights (disabled for performance)
  const glowOrbs = useMemo(() => Array.from({ length: 0 }, (_, i) => ({
    id: `orb-${i}`,
    left: `${seededRandom(100 + i * 4) * 100}%`,
    top: `${seededRandom(101 + i * 4) * 100}%`,
    animationDelay: `${seededRandom(102 + i * 4) * 10}s`,
    animationDuration: `${20 + seededRandom(103 + i * 4) * 15}s`,
    size: `${150 + seededRandom(104 + i * 4) * 200}px`,
  })), []);

  return (
    <div className={styles.backgroundContainer}>
      {/* Gradient Wave Effects */}
      <div className={styles.gradientWave1} />
      <div className={styles.gradientWave2} />
      <div className={styles.gradientWave3} />
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={styles.particle}
          style={{
            left: particle.left,
            animationDelay: particle.animationDelay,
            animationDuration: particle.animationDuration,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
      
      {/* Glow Orbs - Ambient Lights */}
      {glowOrbs.map((orb) => (
        <div
          key={orb.id}
          className={styles.glowOrb}
          style={{
            left: orb.left,
            top: orb.top,
            animationDelay: orb.animationDelay,
            animationDuration: orb.animationDuration,
            width: orb.size,
            height: orb.size,
          }}
        />
      ))}
      
      {/* Smoke/Mist Effects - Multiple Layers */}
      <div className={styles.smokeEffect1} />
      <div className={styles.smokeEffect2} />
      <div className={styles.smokeEffect3} />
      <div className={styles.smokeEffect4} />
      <div className={styles.smokeEffect5} />
      <div className={styles.smokeEffect6} />
      
      {/* Fog Overlay */}
      <div className={styles.fogLayer1} />
      <div className={styles.fogLayer2} />
    </div>
  );
});

export default AnimatedBackground;
