// src/components/Section.js
import React, { forwardRef } from "react";
import styles from './Section.module.css';  // Import Section.module.css

const Section = forwardRef(({ title, children, id }, ref) => {
  return (
    <section id={id} ref={ref} className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
});

export default Section;
