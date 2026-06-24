import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";
import styles from "./Projects.module.css";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function Projects() {
  const count = projects.length.toString().padStart(2, "0");

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
          <span className={styles.path}>~/projects</span>
          <span className={styles.cmd}>$ ls -la</span>
        </motion.div>

        <motion.h1 className={styles.title} variants={item}>
          Projects
        </motion.h1>

        <motion.p className={styles.subtitle} variants={item}>
          Applications and systems I am building to practice backend engineering
          and architecture. The complete source code for each repository is open
          on GitHub.
        </motion.p>

      </motion.header>

      {projects.length > 0 ? (
        <motion.div
          className={styles.grid}
          initial="hidden"
          animate="show"
          variants={container}
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.p
          className={styles.emptyState}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No projects found in the current directory configuration.
        </motion.p>
      )}
    </section>
  );
}