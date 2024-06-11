import "./ProjectCard.css";
import React, { useRef, useState } from 'react';

const ProjectCard = ({videoSrc, projectName, description}) => {
  const videoRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current && !isExpanded) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && !isExpanded) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
    if(!isExpanded &&videoRef.current) {
      videoRef.current.play();
    } else if (isExpanded && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <div className={`project-card ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      onClick={handleCardClick}>
        
      <video ref={videoRef} className="project-video" src= {videoSrc} muted loop></video>
      <h3>{projectName}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
