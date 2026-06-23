import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.page}>
      <span className={styles.eyebrow}>// error</span>
      <h1 className={styles.code}>404</h1>
      <p className={styles.text}>
        This route doesn't exist on this server.
      </p>
      <Link to="/" className={styles.link}>
        ← Back to Home
      </Link>
    </section>
  );
}
