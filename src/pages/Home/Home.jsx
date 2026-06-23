import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";
import styles from "./Home.module.css";

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

// Re-engineered coordinate matrix to form a perfect protective frame around you
const backgroundIcons = [
  /* ================= TOP HALO ARC (Hovering safely above your head) ================= */
  { Icon: SiVercel, color: "#ffffff", top: "4%", left: "50%", rot: "0deg" },
  { Icon: SiApachemaven, color: "#c71a36", top: "6%", left: "38%", rot: "-5deg" },
  { Icon: FaPaypal, color: "#00457C", top: "6%", left: "62%", rot: "15deg" },
  
  /* ================= LEFT FLANK (Frontend - Clear of Center) ================= */
  { Icon: FaHtml5, color: "#e34f26", top: "18%", left: "5%", rot: "-8deg" },
  { Icon: FaCss3Alt, color: "#1572b6", top: "30%", left: "14%", rot: "12deg" },
  { Icon: FaJs, color: "#f7df1e", top: "42%", left: "4%", rot: "-15deg" },
  { Icon: FaReact, color: "#61dafb", top: "54%", left: "15%", rot: "18deg" },
  { Icon: SiVite, color: "#646cff", top: "66%", left: "5%", rot: "-10deg" },
  { Icon: SiReactrouter, color: "#ca4245", top: "78%", left: "14%", rot: "15deg" },
  { Icon: SiTailwindcss, color: "#06b6d4", top: "88%", left: "4%", rot: "-20deg" },
  
  /* ================= RIGHT FLANK (Backend - Clear of Center) ================= */
  { Icon: FaJava, color: "#f89820", top: "18%", left: "88%", rot: "15deg" },
  { Icon: SiSpringboot, color: "#6db33f", top: "30%", left: "79%", rot: "-10deg" },
  { Icon: SiPostgresql, color: "#336791", top: "42%", left: "87%", rot: "20deg" },
  { Icon: FaDocker, color: "#2496ed", top: "54%", left: "78%", rot: "-15deg" },
  { Icon: SiRedis, color: "#dc382d", top: "66%", left: "88%", rot: "12deg" },
  { Icon: SiFramer, color: "#0055FF", top: "78%", left: "79%", rot: "10deg" }
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <span className={styles.eyebrow}>// main.system</span>
          <h1 className={styles.heroTitle}>
            Julharie M. Maddin
          </h1>
          <p className={styles.heroSubtitle}>
            CS student and consistent developer, building toward backend
            engineering — one project at a time.
          </p>

          <div className={styles.heroActions}>
            <Link to="/projects" className={styles.btnPrimary}>
              View Projects
            </Link>
            <Link to="/contact" className={styles.btnGhost}>
              Get In Touch
            </Link>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.frameContainer}>
            
            {/* Background Aura System */}
            <div className={styles.iconAura}>
              {backgroundIcons.map((item, index) => {
                const IconComponent = item.Icon;
                return (
                  <div 
                    key={index} 
                    className={styles.auraIconWrapper}
                    style={{ 
                      top: item.top, 
                      left: item.left,
                      color: item.color,
                      "--initialRot": item.rot
                    }}
                  >
                    <IconComponent size={22} />
                  </div>
                );
              })}
            </div>

            <div className={styles.meshBackground} />
            <img 
              src="/meT.png" 
              alt="Julharie M. Maddin" 
              className={styles.characterCutout} 
            />
            
            <div className={styles.frameBadge}>
              <span className={styles.statusDot} />
              <span>SYS_INIT // LIVE</span>
            </div>
          </div>

          {/* Terminal Statistics Card */}
          <div className={styles.statusCard}>
            <ul className={styles.factList}>
              {facts.map((f) => (
                <li key={f.label} className={styles.factRow}>
                  <span className={styles.factLabel}>{f.label}</span>
                  <span className={styles.factValue}>{f.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className={styles.stackSection}>
        <p className={styles.sectionKicker}>// technology index</p>
        <div className={styles.stackRow}>
          {stackIndex.map((s) => (
            <span key={s} className={styles.stackPill}>
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className={styles.featured}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionKicker}>// case logs</p>
            <h2 className={styles.sectionTitle}>Featured Builds</h2>
          </div>
          <Link to="/projects" className={styles.viewAllLink}>
            View all projects →
          </Link>
        </div>

        {featuredProjects.length > 0 ? (
          <div className={styles.grid}>
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.slug || project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <div className={styles.fallbackGrid}>
            {projects.slice(0, 2).map((project, i) => (
              <ProjectCard key={project.slug || project.id} project={project} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}