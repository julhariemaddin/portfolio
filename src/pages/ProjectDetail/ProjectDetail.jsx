import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import styles from "./ProjectDetail.module.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className={styles.notFound}>
        <span className={styles.eyebrow}>// 404</span>
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

      <header className={styles.header}>
        <span className={styles.kicker}>// {project.role.toLowerCase()} build</span>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.summary}>{project.summary}</p>

        <div className={styles.linkRow}>
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
        </div>
      </header>

      <div className={styles.body}>
        <div className={styles.main}>
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
            <span className={styles.sidebarLabel}>STACK</span>
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