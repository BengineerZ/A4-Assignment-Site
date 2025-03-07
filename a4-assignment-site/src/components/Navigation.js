// src/components/Navigation.js
import React from "react";
import styles from './Navigation.module.css';  // Import Navigation.module.css

const Navigation = ({ scrollToSection }) => {
  return (
    <nav className={styles.nav}>
      <button onClick={() => scrollToSection("introduction")} className={styles.button}>Introduction</button>
      <button onClick={() => scrollToSection("explore")} className={styles.button}>Exploration</button>
      <button onClick={() => scrollToSection("visualization")} className={styles.button}>Visualization</button>
      <button onClick={() => scrollToSection("conclusion")} className={styles.button}>Data Transformation</button>
      <button onClick={() => scrollToSection("future")} className={styles.button}>Future Work</button>
    </nav>
  );
};

export default Navigation;