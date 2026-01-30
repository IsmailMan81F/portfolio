import Project from "./project";
import { projects } from "./projects";
import './projects.css'

export default function Projects(params) {
  const cards = projects.map((project, index) => (
    <Project
      key={index}
      title={project.title}
      description={project.description}
      image={project.picture}
      tech={project.tech}
    />
  ));

  return <div className="projects">{cards}</div>;
}
