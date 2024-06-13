import React, {useState} from 'react';
import ProjectCard from "../../ProjectCard/ProjectCard";
import Rally from '../../../../public/videos/Rally.mp4';

  const projectCardData = [
    {
      projectId: 1,
      videoSrc: '/videos/Rally.mp4',
      projectName: "Inclusive Blog",
      description: "Utilized Javascript, HTML and CSS to create an inclusive blog for parents returning to work after parental leave",
      githubLink: 'https://github.com/ekaiser-512/Rally-',
    },
    {
      projectId: 2,
      projectName: "Capstone - Recipedia",
      description: "Fullstack Culmimatiom of all things learned during General Assembly bootcamp. ",
    },

    {
      projectId: 3,
      projectName: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      projectId: 4,
      projectName: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      projectId: 5,
      projectName: "Project 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      projectId: 6,
      projectName: "Project 6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }
  ];

  const Project = () => {
    const [expandedProject, setExpandedProject] = useState(null);

    const handleCardClick = (index) => {
      setExpandedProject(expandedProject === index ? null : index);
    };

  return (
    <section className="projects" id="projects">
      <div className="project-grid">
        {projectCardData.map((project, index) => {
          return (
            <ProjectCard 
              key={index} 
              videoSrc={project.videoSrc} 
              projectName={project.projectName} 
              description={project.description}
              githubLink={project.githubLink}
              isExpanded={expandedProject === index}
              onCardClick={() => handleCardClick(index)}
              />
          );
        })}
      </div>
    </section>
  );
};
export default Project;