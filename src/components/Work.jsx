import { resumeData } from '../data/resumeData'

function Work() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-lead">
          A few builds spanning full-stack, cloud functions, and practical problem solving.
        </p>

        <div className="projects-grid">
          {resumeData.projects.map((project) => (
            <article key={project.name} className="project-card" tabIndex={0} aria-label={`Project: ${project.name}`}>
              <div className="card-indicator" aria-hidden="true" title="Open details">
                ↗
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.name}</h3>
                {project.tech ? <p className="project-tech">{project.tech}</p> : null}
                {project.description ? <p className="project-desc">{project.description}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;