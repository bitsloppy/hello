import styles from "./NewProjectCard.module.css";

export default function NewProjectCard() {
  return (
    <a href="#" className={styles.card} aria-label="Add new project">
      <div className={styles.inner}>
        <span className={styles.icon} aria-hidden>+</span>
        <span className={styles.label}>NEW PROJECT</span>
      </div>
    </a>
  );
}
