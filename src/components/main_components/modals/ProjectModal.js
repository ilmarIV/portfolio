import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ isOpen, onClose, image, title, year, description, role, link }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <h4>Year: {year}</h4>
        <p>{description}</p>
        <h4>My Role:</h4>
        <p>{role}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">Link to Website</a>
      </div>
    </div>
  );
};

export default ProjectModal;