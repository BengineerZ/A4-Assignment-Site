// src/components/Navigation.js
import React from "react";
import styles from './Navigation.module.css';  // Import Navigation.module.css

const Navigation = ({ scrollToSection }) => {
  return (
    <nav className={styles.nav}>
      <button onClick={() => scrollToSection("introduction")} className={styles.button}>Introduction</button>
      <button onClick={() => scrollToSection("data")} className={styles.button}>Data</button>
      <button onClick={() => scrollToSection("visualization")} className={styles.button}>Visualization</button>
      <button onClick={() => scrollToSection("conclusion")} className={styles.button}>Conclusion</button>
    </nav>
  );
};

export default Navigation;