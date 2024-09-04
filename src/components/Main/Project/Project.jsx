import React, { useState } from 'react';
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
    description: "Fullstack Culmimatiom of all things learned during General Assembly bootcamp including Spring Security and password encryption. ",
    githubLink: 'https://github.com/ekaiser-512/Capstone-Recipedia',
  },

  {
    projectId: 3,
    projectName: "Inclusive Blog Backend",
    description: "Creating an example of what a backend would potentially look like for Rally utilizing Springboot and a Notification MicroService",
    githubLink: 'https://github.com/ekaiser-512/InclusiveBlogBackend',
  },

  {
    projectId: 4,
    projectName: "Java Dictionary App",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    githubLink: 'https://github.com/ekaiser-512/java-dictionary',

  },

  {
    projectId: 5,
    projectName: "League Manager App",
    description: "Partner project with Zach Kapalka to create an app that utilizes CRUD functionality. ",
    githubLink: 'https://github.com/ekaiser-512/LeagueManagerApp',
  },
  {
    projectId: 6,
    projectName: "Portfolio Code",
    description: "Curious about the code for this site? Check it out here",
    githubLink: 'https://github.com/ekaiser-512/ekaiser-512.github.io',
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