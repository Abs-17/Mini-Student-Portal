import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.bgShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>
      <h1 className={styles.aboutTitle}>About this student portal</h1>
      <p className={styles.aboutText}>
        This Student Portal is a demo project built with Next.js.<br />
        It shows how to use pages, components, props, and state management.<br />
        More features will be added as we progress <span className={styles.rocket}>🚀</span>.
      </p>
    </div>
  );
}