import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ projectName, description, githubLink, videoSrc, isExpanded, onCardClick }) => {

  const handleCloseClick = (e) => {
    e.stopPropagation(); // Prevent triggering the card click event
    onCardClick();
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`project-card ${isExpanded ? 'expanded' : ''}`} onClick={onCardClick}>
      {isExpanded && <button className="close-button" onClick={handleCloseClick}>×</button>}
      <h3>{projectName}</h3>
      <p>{description}</p>
      <a href={githubLink} target="blank" rel="noopener noreferrer" className="github-button-link" onClick={handleLinkClick}>
        <button className="github-button">View Code</button>
      </a>
      {isExpanded && <video className="project-video" src={videoSrc} controls />}
    </div>
  );
};

export default ProjectCard;
