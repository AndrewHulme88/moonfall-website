import { HiArrowUpRight } from 'react-icons/hi2';

const ProjectPage = ({ eyebrow, title, intro, projects, linkLabel = 'View project' }) => (
  <div className="shell">
    <section className="page-intro">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="page-title">{title}</h1>
      </div>
      <p className="page-copy">{intro}</p>
    </section>

    <section className="project-list" aria-label={`${eyebrow} projects`}>
      {projects.map((project) => (
        <article className="project-card" key={project.name}>
          <div className="project-content">
            <h2 className="project-title">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            {project.link !== '#' && (
              <a href={project.link} className="text-link" target="_blank" rel="noopener noreferrer">
                {linkLabel} <HiArrowUpRight aria-hidden="true" />
              </a>
            )}
            {project.link === '#' && <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6f7279]">In development</span>}
          </div>
          <div className={`project-visual ${project.contain ? 'contain' : ''}`}>
            <img src={project.image} alt={`${project.name} project preview`} />
          </div>
        </article>
      ))}
    </section>
  </div>
);

export default ProjectPage;
