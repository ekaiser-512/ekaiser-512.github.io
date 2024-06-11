import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ projectName, description, videoSrc, isExpanded, onCardClick }) => {
  const handleCloseClick = (e) => {
    e.stopPropagation(); // Prevent triggering the card click event
    onCardClick();
  };

  return (
    <div className={`project-card ${isExpanded ? 'expanded' : ''}`} onClick={onCardClick}>
      {isExpanded && <button className="close-button" onClick={handleCloseClick}>×</button>}
      <h3>{projectName}</h3>
      <p>{description}</p>
      {isExpanded && <video className="project-video" src={videoSrc} controls />}
    </div>
  );
};

export default ProjectCard;
