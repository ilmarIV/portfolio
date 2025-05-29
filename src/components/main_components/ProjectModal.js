import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ isOpen, onClose, image, title }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <h4>Year: 2025</h4>
        <p>
          This project involved developing a landing-page style website for a company 
          in the sawmill industry. The website was built using React and Bootstrap, 
          and was deployed using the Zone hosting service. In addition to the public-facing site, 
          the project included the development of an admin panel, allowing the client 
          to easily update page content and manage images.
        </p>
        <h4>My Role:</h4>
        <p>
          I was primarily responsible for design and testing. I created interactive prototypes 
          and focused on the UI/UX design of the website to ensure a user-friendly experience. 
          Additionally, I conducted manual testing and produced relevant documentation 
          to support project delivery and handover.
        </p>
        <a
        href={'https://xn--saewrk-eua.ee/'}
        target="_blank"
        >
            Link to Website
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;