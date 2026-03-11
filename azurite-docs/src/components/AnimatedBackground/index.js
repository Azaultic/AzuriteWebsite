import React from 'react';
import styles from './styles.module.css';

const AnimatedBackground = React.memo(function AnimatedBackground() {
  return (
    <div className={styles.backgroundContainer} />
  );
});

export default AnimatedBackground;
