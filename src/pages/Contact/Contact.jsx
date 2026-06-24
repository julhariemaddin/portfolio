import { motion } from "framer-motion";
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
  return (
    <section className={styles.page}>
      <motion.header
        className={styles.header}
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div className={styles.terminalLine} variants={item}>
          <span className={styles.prompt}>julhariemaddin@portfolio</span>
          <span className={styles.path}>~/contact</span>
          <span className={styles.cmd}>$ cat channels</span>
        </motion.div>
        <motion.h1 className={styles.title} variants={item}>
          Get In Touch
        </motion.h1>
        <motion.p className={styles.subtitle} variants={item}>
          Open to feedback, collaboration, or just talking shop about
          backend development. Reach out through any of these.
        </motion.p>
      </motion.header>

      <motion.div
        className={styles.grid}
        initial="hidden"
        animate="show"
        variants={container}
      >
        {channels.map((c) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={styles.card}
            variants={item}
          >
            <span className={styles.cardLabel}>{c.label}</span>
            <span className={styles.cardValue}>{c.value}</span>
            <span className={styles.cardNote}>{c.note}</span>
            <span className={styles.cardArrow}>↗</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}