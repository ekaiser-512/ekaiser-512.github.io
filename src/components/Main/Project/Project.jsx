import ProjectCard from "../../ProjectCard/ProjectCard";

const Project = () => {
  const projectCardData = [
    {
      projectName: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
            <ProjectCard key={index} image={project.image} alt={project.alt} projectName={project.projectName} description={project.description}/>
          );
        })}
      </div>
    </section>
  );
};

export default Project;