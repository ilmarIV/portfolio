// components/Projects/Projects.js

import React, { useState } from 'react';
import saew2rkImg from '../../res/saew2rk.png';
import './Projects.css';
import './global.css';
import ProjectModal1 from './modals/ProjectModal1';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='w-1600' id="projects">
      <div className="project-card" onClick={() => setIsOpen(true)}>
        <img src={saew2rkImg} alt="Ilmar Vodi" />
        <h1>My First Client Project</h1>
      </div>

      <ProjectModal1
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        image={saew2rkImg}
        title="My First Client Project"
      />
      <h2>More projects coming soon...</h2>
    </section>
  );
};

export default Projects;