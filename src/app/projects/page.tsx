'use client';
import styles from './styles/projects.module.css';
import { useLang } from '../context/langContext';
import content from './data/projectContent.json';
import ProjectCard from './components/card';

export default function Projects() {
  const { lang } = useLang();
  const projects = content.projects[lang];

  return (
    <main className={styles.container}>
      
      <h1
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: projects.title }}
      />

      <div className={styles.grid}>
        {projects.items.map((project: any, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </main>
  );
}