import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";
import ResumeModal from "../../components/ResumeModal";
import styles from "./Home.module.css";
import { motion } from "framer-motion";

const facts = [
  { flag: "--role", value: "CS Student" },
  { flag: "--school", value: "JRMSU — Siocon Campus" },
  { flag: "--education", value: "SH-Graduate with CSS NC II Holder" },
  { flag: "--exp", value: "2+ years, Making backend applications for my school" },
  { flag: "--focus", value: "Backend Development" },
  { flag: "--status", value: "Currently building" },
];

const stackIndex = [
  "Java 21", "Spring Boot", "Spring Security", "PostgreSQL", "Redis",
  "Redisson", "JWT", "PayPal SDK", "Docker", "Maven", "HTML5", "CSS3", "JavaScript",
  "React 18", "Vite", "React Router", "Zustand", "Axios", "Tailwind CSS",
  "Framer Motion", "Vercel"
];

// Animation variants — entrance only, nothing runs forever.
const fadeUpContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.terminal}>
          {/* Window chrome — same system as About, so the two pages read
              as one continuous tool rather than two different themes. */}
          <div className={styles.titleBar}>
            <div className={styles.dots}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
            <p className={styles.titleText}>julhariemaddin@portfolio: ~</p>
            <span className={styles.titleMeta}>zsh</span>
          </div>

          <div className={styles.crt}>
            {/* Left: boot identity — name + facts printed like a CLI's
                own startup banner and resolved flags, not a generic
                eyebrow/heading/card-stat block. */}
            <motion.div
              className={styles.heroLeft}
              variants={fadeUpContainer}
              initial="hidden"
              animate="show"
            >
              <motion.p variants={fadeUpItem} className={styles.versionLine}>
                portfolio <strong>v1.0.0</strong> — process started, status: running
              </motion.p>

              <motion.div variants={fadeUpItem} className={styles.commandLine}>
                <span className={styles.prompt}>julhariemaddin@portfolio</span>
                <span className={styles.path}>~</span>
                <span className={styles.cmd}>$ ./init --identity</span>
              </motion.div>

              <motion.h1 variants={fadeUpItem} className={styles.heroTitle}>
                Julharie M. Maddin
              </motion.h1>

              <motion.p variants={fadeUpItem} className={styles.heroSubtitle}>
                CS student and consistent developer, building toward backend
                engineering — one project at a time.
              </motion.p>

              <motion.div variants={fadeUpItem} className={styles.flagList}>
                {facts.map((f) => (
                  <div key={f.flag} className={styles.flagRow}>
                    <span className={styles.flagName}>{f.flag}</span>
                    <span className={styles.flagValue}>{f.value}</span>
                  </div>
                ))}
                <button
                  type="button"
                  className={styles.flagRowButton}
                  onClick={() => setResumeOpen(true)}
                >
                  <span className={styles.flagName}>--resume</span>
                  <span className={styles.flagValueLink}>view resume.docx</span>
                </button>
              </motion.div>

              <motion.div variants={fadeUpItem} className={styles.heroActions}>
                <Link to="/projects" className={styles.btnPrimary}>
                  view projects
                </Link>
                <Link to="/contact" className={styles.btnGhost}>
                  get in touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: rendered portrait — sits inside the same terminal
                as a "render output" frame, not a separate floating card
                with icons orbiting it. One status line, no ambient
                decoration competing with the identity column. */}
            <motion.div
              className={styles.heroRight}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.renderFrame}>
                <div className={styles.scanlines} />
                <div className={styles.renderTag}>
                  <span className={styles.statusDot} />
                  <span>render.output // live</span>
                </div>
                <img
                  src="/Me2.png"
                  alt="Julharie M. Maddin"
                  className={styles.characterCutout}
                />
              </div>
              <p className={styles.renderCaption}>
                # photo.render(quality=&quot;full&quot;, mode=&quot;color&quot;)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stack section — npm list framing, distinct from About's
          directory-listing metaphor: this is "what's installed and
          running", which fits a homepage's job better than file browsing. */}
      <motion.section
        className={styles.stackSection}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.commandLine + " " + styles.stackHeaderLine}>
          <span className={styles.prompt}>julhariemaddin@portfolio</span>
          <span className={styles.path}>~</span>
          <span className={styles.cmd}>$ npm list --depth=0</span>
        </div>
        <div className={styles.stackRow}>
          {stackIndex.map((s) => (
            <span key={s} className={styles.stackPill}>
              {s}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Featured projects */}
      <motion.section
        className={styles.featured}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.commandLine} style={{ marginBottom: 0 }}>
              <span className={styles.prompt}>julhariemaddin@portfolio</span>
              <span className={styles.path}>~</span>
              <span className={styles.cmd}>$ ls ./projects --featured</span>
            </div>
            <h2 className={styles.sectionTitle}>Featured Builds</h2>
          </div>
          <Link to="/projects" className={styles.viewAllLink}>
            view all projects &rarr;
          </Link>
        </div>

        <div className={featuredProjects.length > 0 ? styles.grid : styles.fallbackGrid}>
          {(featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 2)).map((project, i) => (
            <motion.div
              key={project.slug || project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
