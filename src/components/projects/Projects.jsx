import Project from "./project";
import { projects } from "./projects";

export default function Projects(params) {
  const cards = projects.map((project, index) => (
    <Project
      id={index}
      title={project.title}
      description={project.description}
      image={project.picture}
      tech={project.tech}
    />
  ));

  return <div className="projects">{cards}</div>;
}
