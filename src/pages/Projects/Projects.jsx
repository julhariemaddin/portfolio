import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>// ls ./projects</span>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          Applications and systems I am building to practice backend engineering and 
          architecture. The complete source code for each repository is open on GitHub.
        </p>
      </header>

      {projects.length > 0 ? (
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className={styles.emptyState}>
          No projects found in the current directory configuration.
        </p>
      )}
    </section>
  );
}
