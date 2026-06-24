import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";
import styles from "./Home.module.css";
import { motion } from "framer-motion";

import { 
  FaJava, FaDocker, FaPaypal, FaReact, 
  FaHtml5, FaCss3Alt, FaJs 
} from "react-icons/fa";
import { 
  SiSpringboot, SiPostgresql, SiRedis, SiApachemaven, 
  SiVite, SiReactrouter, SiTailwindcss, SiFramer, SiVercel
} from "react-icons/si";

const facts = [
  { label: "Role", value: "CS Student" },
  { label: "School", value: "JRMSU — Siocon Campus" },
  { label: "Focus", value: "Backend Development" },
  { label: "Status", value: "Currently building" },
];

const stackIndex = [
  "Java 21", "Spring Boot", "Spring Security", "PostgreSQL", "Redis", 
  "Redisson", "JWT", "PayPal SDK", "Docker", "Maven", "HTML5", "CSS3", "JavaScript", 
  "React 18", "Vite", "React Router", "Zustand", "Axios", "Tailwind CSS", 
  "Framer Motion", "Vercel"
];

// Preserved your exact protective frame coordinates
const backgroundIcons = [
  { Icon: SiVercel, color: "#ffffff", top: "4%", left: "50%", rot: 0 },
  { Icon: SiApachemaven, color: "#c71a36", top: "6%", left: "38%", rot: -5 },
  { Icon: FaPaypal, color: "#00457C", top: "6%", left: "62%", rot: 15 },
  { Icon: FaHtml5, color: "#e34f26", top: "18%", left: "5%", rot: -8 },
  { Icon: FaCss3Alt, color: "#1572b6", top: "30%", left: "14%", rot: 12 },
  { Icon: FaJs, color: "#f7df1e", top: "42%", left: "4%", rot: -15 },
  { Icon: FaReact, color: "#61dafb", top: "54%", left: "15%", rot: 18 },
  { Icon: SiVite, color: "#646cff", top: "66%", left: "5%", rot: -10 },
  { Icon: SiReactrouter, color: "#ca4245", top: "78%", left: "14%", rot: 15 },
  { Icon: SiTailwindcss, color: "#06b6d4", top: "88%", left: "4%", rot: -20 },
  { Icon: FaJava, color: "#f89820", top: "18%", left: "88%", rot: 15 },
  { Icon: SiSpringboot, color: "#6db33f", top: "30%", left: "79%", rot: -10 },
  { Icon: SiPostgresql, color: "#336791", top: "42%", left: "87%", rot: 20 },
  { Icon: FaDocker, color: "#2496ed", top: "54%", left: "78%", rot: -15 },
  { Icon: SiRedis, color: "#dc382d", top: "66%", left: "88%", rot: 12 },
  { Icon: SiFramer, color: "#0055FF", top: "78%", left: "79%", rot: 10 }
];

// Animation Variants for organic staggering
const fadeUpContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div 
          className={styles.heroLeft}
          variants={fadeUpContainer}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={fadeUpItem} className={styles.eyebrow}>
            // main.system
          </motion.span>
          
          <motion.h1 variants={fadeUpItem} className={styles.heroTitle}>
            Julharie M. Maddin
          </motion.h1>
          
          <motion.p variants={fadeUpItem} className={styles.heroSubtitle}>
            CS student and consistent developer, building toward backend
            engineering — one project at a time.
          </motion.p>

          <motion.div variants={fadeUpItem} className={styles.heroActions}>
            <Link to="/projects" className={styles.btnPrimary}>
              View Projects
            </Link>
            <Link to="/contact" className={styles.btnGhost}>
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.heroRight}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <div className={styles.frameContainer}>
            
            {/* Background Aura System - Now using Framer Motion for organic floating */}
            <div className={styles.iconAura}>
              {backgroundIcons.map((item, index) => {
                const IconComponent = item.Icon;
                // Create a pseudo-random delay based on index for organic movement
                const delay = index * 0.15; 
                
                return (
                  <motion.div 
                    key={index} 
                    className={styles.auraIconWrapper}
                    style={{ top: item.top, left: item.left, color: item.color }}
                    initial={{ rotate: item.rot, y: 0, opacity: 0 }}
                    animate={{ 
                      y: [-4, 4, -4],
                      rotate: [item.rot, item.rot + 4, item.rot],
                      opacity: 1
                    }}
                    transition={{
                      y: { duration: 4 + (index % 3), repeat: Infinity, ease: "easeInOut", delay },
                      rotate: { duration: 5 + (index % 2), repeat: Infinity, ease: "easeInOut", delay },
                      opacity: { duration: 1, delay: delay + 0.5 }
                    }}
                  >
                    <IconComponent size={20} />
                  </motion.div>
                );
              })}
            </div>

            <div className={styles.meshBackground} />
            
            <motion.img 
              src="/meT.png" 
              alt="Julharie M. Maddin" 
              className={styles.characterCutout}
              whileHover={{ scale: 1.03, filter: "grayscale(0) contrast(1) brightness(1)", y: 0 }}
            />
            
            <div className={styles.frameBadge}>
              <span className={styles.statusDot} />
              <span>SYS_INIT // LIVE</span>
            </div>
          </div>

          {/* Terminal Statistics Card */}
          <div className={styles.statusCard}>
            <ul className={styles.factList}>
              {facts.map((f, i) => (
                <motion.li 
                  key={f.label} 
                  className={styles.factRow}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + (i * 0.1) }}
                >
                  <span className={styles.factLabel}>{f.label}</span>
                  <span className={styles.factValue}>{f.value}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Stack Section with Scroll Reveal */}
      <motion.section 
        className={styles.stackSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <p className={styles.sectionKicker}>// technology index</p>
        <div className={styles.stackRow}>
          {stackIndex.map((s, i) => (
            <motion.span 
              key={s} 
              className={styles.stackPill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, type: "spring" }}
              whileHover={{ y: -2, borderColor: "var(--neon-glow-secondary)" }}
            >
              {s}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Featured Projects Section with Scroll Reveal */}
      <motion.section 
        className={styles.featured}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionKicker}>// case logs</p>
            <h2 className={styles.sectionTitle}>Featured Builds</h2>
          </div>
          <Link to="/projects" className={styles.viewAllLink}>
            View all projects &rarr;
          </Link>
        </div>

        <div className={featuredProjects.length > 0 ? styles.grid : styles.fallbackGrid}>
          {(featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 2)).map((project, i) => (
            <motion.div
              key={project.slug || project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 80 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}