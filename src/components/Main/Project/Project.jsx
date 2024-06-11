import ProjectCard from "../../ProjectCard/ProjectCard";
import '../../../assets/Rally-Project1.mov';

const Project = () => {
  const projectCardData = [
    {
      videoSrc: '../../../assets/Rally-Project1.mov',
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
  return (
    <section className="projects" id="projects">
      <h2>My Portfolio</h2>
      <div className="project-grid">
        {projectCardData.map((project, index) => {
          return (
            <ProjectCard key={index} videoSrc={project.videoSrc} projectName={project.projectName} description={project.description}/>
          );
        })}
      </div>
    </section>
  );
};

export default Project;