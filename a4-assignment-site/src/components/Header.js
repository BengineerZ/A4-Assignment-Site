// src/components/Header.js
import React from 'react';
import styles from './Header.module.css';  // Import Header.module.css

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Persuasive or Deceptive Visualization?</h1>
      <h2>A4: Leveraging data to communicate insights effectively</h2>
      <p>Ben Zandonati - bzando@mit.edu</p>
    </header>
  );
};

export default Header;