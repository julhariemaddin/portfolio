import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <span className={styles.eofMarker}>
            <span className={styles.eofTilde} aria-hidden="true">~</span>
            EOF
          </span>
          <p className={styles.copy}>
            © {year} Julharie M. Maddin. All rights reserved.
          </p>
        </div>

        <div className={styles.col}>
          <a
            href="mailto:julharie.maddin.13@gmail.com"
            className={styles.footerLink}
          >
            julharie.maddin.13@gmail.com
          </a>
          <a
            href="https://github.com/julhariemaddin"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            github.com/julhariemaddin
          </a>
        </div>
      </div>
    </footer>
  );
}