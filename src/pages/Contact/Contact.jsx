import styles from "./Contact.module.css";

const channels = [
  {
    label: "Email",
    value: "julharie.maddin.13@gmail.com",
    href: "mailto:julharie.maddin.13@gmail.com",
    note: "Best way to reach me",
  },
  {
    label: "GitHub",
    value: "github.com/julhariemaddin",
    href: "https://github.com/julhariemaddin",
    note: "Source code & projects",
  },
  {
    label: "Facebook",
    value: "Julharie Maddin",
    href: "https://www.facebook.com/profile.php?id=61584060152988",
    note: "Quick message",
  },
];

export default function Contact() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>// contact.json</span>
        <h1 className={styles.title}>Get In Touch</h1>
        <p className={styles.subtitle}>
          Open to feedback, collaboration, or just talking shop about
          backend development. Reach out through any of these.
        </p>
      </header>

      <div className={styles.grid}>
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={styles.card}
          >
            <span className={styles.cardLabel}>{c.label}</span>
            <span className={styles.cardValue}>{c.value}</span>
            <span className={styles.cardNote}>{c.note}</span>
            <span className={styles.cardArrow}>↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
