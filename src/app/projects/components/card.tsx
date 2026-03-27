'use client';
import styles from '../styles/projects.module.css';

type Project = {
  name: string;
  tag: string;
  description: string;
  details: string[];
  image?: string;
  link?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const CardWrapper = project.link ? 'a' : 'div';

  return (
    <CardWrapper
      href={project.link}
      target={project.link ? "_blank" : undefined}
      rel="noreferrer"
      className={styles.card}
    >
      {project.image && (
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${project.image})` }}
        />
      )}

      <div className={styles.content}>
        <span className={styles.tag}>{project.tag}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <ul>
          {project.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    </CardWrapper>
  );
}