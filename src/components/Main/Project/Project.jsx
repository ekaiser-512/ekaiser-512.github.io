import React, {useState} from 'react';
import ProjectCard from "../../ProjectCard/ProjectCard";
import '../../../assets/Rally.mp4';

  const projectCardData = [
    {
      videoSrc: '../../../assets/Rally.mp4',
      projectName: "Inclusive Blog",
      description: "Utilized Javascript, HTML and CSS to create an inclusive blog for parents returning to work after parental leave",
    },
    {
      projectName: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      projectName: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      projectName: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      projectName: "Project 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
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