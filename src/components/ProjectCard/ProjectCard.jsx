import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <span className="project-year">{project.year}</span>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-footer">
          <div className="project-tech">
            <span className="tech-label">Tech Stack:</span>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>
          <div className="project-badge">
            <i className="fas fa-trophy"></i> {project.badge}
          </div>
          <div className="project-links">
            {project.codeLink ? (
              <a 
                href={project.codeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-btn"
              >
                <i className="fas fa-code"></i> Code
              </a>
            ) : (
              <span 
                className="project-btn" 
                style={{opacity: 0.6, cursor: "not-allowed"}} 
                title="Private repository"
              >
                <i className="fas fa-code"></i> Code
              </span>
            )}
            {project.demoLink ? (
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-btn"
              >
                <i className="fas fa-rocket"></i> Live Demo
              </a>
            ) : (
              <span 
                className="project-btn" 
                style={{opacity: 0.6, cursor: "not-allowed"}} 
                title="Demo not available"
              >
                <i className="fas fa-rocket"></i> Demo
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
