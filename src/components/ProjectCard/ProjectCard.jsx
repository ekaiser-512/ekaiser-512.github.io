import "./ProjectCard.css"

const ProjectCard = ({projectName, description }) => {
  return (
    <div className="project-card">
      <h3>{projectName}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
