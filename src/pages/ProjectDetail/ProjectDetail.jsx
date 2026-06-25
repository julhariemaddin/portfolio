import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import styles from "./ProjectDetail.module.css";

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

// Matches the .browserMockup / .mobilePreviewCard breakpoint in the CSS.
// Kept as one source of truth referenced in a comment on both sides.
const MOBILE_QUERY = "(max-width: 640px)";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [isInteractive, setIsInteractive] = useState(false);

  // Real device-width check, not just a CSS display:none toggle.
  // Hidden iframes (display:none on an ancestor) are still treated as
  // eligible for eager fetch by Chrome's lazy-load heuristic, so a
  // mobile visitor would still download the entire embedded site even
  // though they'd never see the desktop-scaled mockup. Not rendering
  // the <iframe> at all on mobile is the only way to actually stop
  // that fetch, hence the JS check instead of pure CSS hiding.
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const handleChange = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  if (!project) {
    return (
      <section className={styles.notFound}>
        <span className={styles.eyebrow}>Not Found</span>
        <h1 className={styles.notFoundTitle}>Project not found</h1>
        <p className={styles.notFoundText}>
          We could not find a project with that name.
        </p>
        <Link to="/projects" className={styles.backLink}>
          <span>Back to Projects</span>
        </Link>
      </section>
    );
  }

  return (
    <section className={styles.detail}>
      <div className={styles.navRow}>
        <Link to="/projects" className={styles.backLink}>
          <span>Back to Projects</span>
        </Link>
      </div>

      <motion.header
        className={styles.header}
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div className={styles.terminalLine} variants={item}>
          <span className={styles.prompt}>julhariemaddin@portfolio</span>
          <span className={styles.path}>~/projects/{project.slug}</span>
          <span className={styles.cmd}>$ cat info</span>
        </motion.div>

        <motion.span className={styles.kicker} variants={item}>
          {project.role}
        </motion.span>
        <motion.h1 className={styles.title} variants={item}>
          {project.title}
        </motion.h1>
        <motion.p className={styles.summary} variants={item}>
          {project.summary}
        </motion.p>

        <motion.div className={styles.linkRow} variants={item}>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              Source Code ↗
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGhost}
            >
              Live Demo ↗
            </a>
          )}
          <span className={styles.statusBadge}>{project.status}</span>
        </motion.div>
      </motion.header>

      <div className={styles.body}>
        <div className={styles.main}>
          {project.previewType === "iframe" && project.liveUrl && (
            isMobile ? (
              // Mobile: no iframe mounts at all, so nothing fetches the
              // embedded site in the background. Just a link-out card.
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobilePreviewCard}
              >
                <span className={styles.mobilePreviewText}>
                  <span className={styles.mobilePreviewLabel}>Live demo</span>
                  <span className={styles.mobilePreviewUrl}>
                    {project.liveUrl.replace("https://", "").replace(/\/$/, "")}
                  </span>
                </span>
                <span className={styles.mobilePreviewArrow}>↗</span>
              </a>
            ) : (
              <div className={styles.browserMockup}>
                <div className={styles.browserHeader}>
                  <div className={styles.browserDots}>
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                  <div className={styles.urlBar}>
                    {project.liveUrl.replace("https://", "").replace(/\/$/, "")}
                  </div>
                  <button
                    className={styles.interactiveToggle}
                    onClick={() => setIsInteractive(!isInteractive)}
                  >
                    {isInteractive ? "Disable interaction" : "Interact"}
                  </button>
                </div>

                <div className={styles.iframeWrapper}>
                  <iframe
                    src={project.liveUrl}
                    title={`${project.title} Live Preview`}
                    loading="lazy"
                    className={styles.liveIframe}
                  />
                  {!isInteractive && (
                    <div
                      className={styles.iframeShield}
                      onClick={() => setIsInteractive(true)}
                      title="Click to interact"
                    >
                      <span className={styles.shieldText}>Click to interact</span>
                    </div>
                  )}
                </div>
              </div>
            )
          )}

          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Overview</h2>
            <p className={styles.description}>{project.description}</p>
          </section>

          {project.highlights?.length > 0 && (
            <section className={styles.block}>
              <h2 className={styles.blockTitle}>Highlights</h2>
              <ul className={styles.highlightList}>
                {project.highlights.map((h) => (
                  <li key={h} className={styles.highlightItem}>
                    <span className={styles.highlightMark}>›</span>
                    {h}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <span className={styles.sidebarLabel}>Stack</span>
            <ul className={styles.tags}>
              {project.tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}