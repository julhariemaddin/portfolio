import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <Link to={`/projects/${project.slug}`} className={styles.card}>
      <div className={styles.imgWrap}>
        <div className={styles.placeholderImg} aria-hidden="true">
          <span>{project.role === "Backend" ? "{ }" : "</>"}</span>
        </div>
        <span className={styles.statusTag}>{project.status}</span>
      </div>

      <div className={styles.body}>
        <span className={styles.kicker}>
          0{index + 1} // {project.role}
        </span>

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
          <span className={styles.footerLabel}>VIEW DETAILS</span>
          <span className={styles.arrow}>→</span>
        </div>
      </div>
    </Link>
  );
}
