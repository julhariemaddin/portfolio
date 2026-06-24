import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";

function permissionString(project) {
  // rwx-style flag derived from real project data, not decorative
  const r = "r";
  const w = project.status?.toLowerCase().includes("progress") ? "w" : "-";
  const x = project.liveUrl ? "x" : "-";
  return `${r}${w}${x}`;
}

function fileSize(project) {
  const kb = 12 + project.tags.length * 4 + project.title.length;
  return `${kb}K`;
}

export default function ProjectCard({ project }) {
  const filename = `${project.slug}.${project.role === "Backend" ? "java" : "tsx"}`;

  return (
    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2, ease: "easeOut" }}>
      <Link to={`/projects/${project.slug}`} className={styles.card}>
        <div className={styles.listingRow}>
          <span className={styles.perm}>-{permissionString(project)}{permissionString(project)}{permissionString(project)}</span>
          <span className={styles.size}>{fileSize(project)}</span>
          <span className={styles.filename}>{filename}</span>
          <span className={styles.statusTag}>{project.status}</span>
        </div>

        <div className={styles.body}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.summary}>{project.summary}</p>

          <ul className={styles.tags}>
            {project.tags.slice(0, 4).map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>

          <div className={styles.footer}>
            <span className={styles.footerLabel}>View details</span>
            <span className={styles.arrow}>→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}