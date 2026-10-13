"use client";

import styles from "./NewProjectCard.module.css";

export default function NewProjectCard() {
  return (
    <wa-card
      data-variant="placeholder"
      aria-label="Upcoming project"
      className={styles.card}
    >
      <div className={styles.inner}>
        <span className={styles.icon} aria-hidden>
          +
        </span>
        <span className={styles.label}>NEW PROJECT</span>
      </div>
    </wa-card>
  );
}
