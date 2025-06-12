import React, { useState } from 'react';
import projects from '../../res/descr_projects.json';
import './Projects.css';
import './global.css';
import ProjectModal from './modals/ProjectModal';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className='w-1600' id="projects">
      <div className='projects-wrapper'>
        {projects.map((project, index) => (
          <div
            key={project.id || index}
            className="project-card"
            onClick={() => setActiveProject(project)}
          >
            <img src={project.image} alt={project.title} />
            <h1>{project.title}</h1>
          </div>
        ))}
      </div>

      {activeProject && (
        <ProjectModal
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
          {...activeProject}
        />
      )}
    </section>
  );
};

export default Projects;