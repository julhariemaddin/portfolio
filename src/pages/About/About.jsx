import { motion } from "framer-motion";
import styles from "./About.module.css";

const timeline = [
  {
    label: "Now",
    title: "BS Computer Science",
    detail: "Studying at JRMSU, Siocon Campus",
  },
  {
    label: "Focus",
    title: "Backend development",
    detail: "Java, Spring Boot, PostgreSQL, and Redis ecosystem",
  },
  {
    label: "Approach",
    title: "Learn by building",
    detail: "Shipping full applications end-to-end instead of chasing tutorial loops",
  },
];

const stack = {
  Languages: ["Java 21", "JavaScript", "SQL", "HTML5", "CSS3"],
  "Frameworks & Core": ["Spring Boot", "Spring Security", "React 18", "Vite", "React Router"],
  "Data & Infrastructure": ["PostgreSQL", "Redis", "Redisson", "Docker", "Maven", "Vercel"],
  "Libraries & Specs": ["JWT Auth", "PayPal SDK", "Zustand", "Axios", "Tailwind CSS", "Framer Motion"],
};

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

export default function About() {
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
          <span className={styles.path}>~/about</span>
          <span className={styles.cmd}>$ whoami</span>
        </motion.div>
        <motion.h1 className={styles.title} variants={item}>
          About
        </motion.h1>
      </motion.header>

      <div className={styles.body}>
        <div className={styles.intro}>
          <p className={styles.paragraph}>
            I am Julharie M. Maddin, a Computer Science student at JRMSU Siocon Campus.
            My primary goal is learning how to design and build software systems that work cleanly
            end-to-end, focusing on real implementation over raw theory.
          </p>
          <p className={styles.paragraph}>
            Right now, my engineering focus is directed toward backend development. My day-to-day stack
            centers around Java, Spring Boot, SQL databases, and Redis caching layers. To round out my
            skills, I construct frontend interfaces using React. My active build, NP-Shop, is a complete
            e-commerce engine decoupled into a robust Spring Boot API and a responsive React client.
            This architecture serves as my testing ground for parsing authentication flows, secure
            payment webhooks, cache invalidation, and data persistence models.
          </p>
          <p className={styles.paragraph}>
            Though I am relatively new to the industry and currently three weeks into building in public,
            consistency is my driver. Every repository is an intentional push to get one layer deeper
            into how modern web infrastructure performs under the hood.
          </p>
        </div>

        <div className={styles.timeline}>
          <span className={styles.sectionKicker}>Currently</span>
          <ul className={styles.timelineList}>
            {timeline.map((entry) => (
              <li key={entry.title} className={styles.timelineItem}>
                <span className={styles.timelineLabel}>{entry.label}</span>
                <div>
                  <p className={styles.timelineTitle}>{entry.title}</p>
                  <p className={styles.timelineDetail}>{entry.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.stackSection}>
        <span className={styles.sectionKicker}>Tech stack</span>
        <div className={styles.stackGrid}>
          {Object.entries(stack).map(([category, items]) => (
            <div key={category} className={styles.stackCol}>
              <h3 className={styles.stackCategory}>{category}</h3>
              <ul className={styles.stackList}>
                {items.map((entry) => (
                  <li key={entry} className={styles.stackItem}>
                    {entry}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}