// src/components/Header.js
import React from 'react';
import styles from './Header.module.css';  // Import Header.module.css

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Persuasive Data Visualization</h1>
      <p>Leveraging data to communicate insights effectively</p>
    </header>
  );
};

export default Header;