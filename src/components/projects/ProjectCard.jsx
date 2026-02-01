import "./ProjectCard.css";
import Arrow from "../hero/Arrow";
import { useState } from "react";

export default function ProjectCard(props) {
  const [hover, setHover] = useState(false);

  const icons = props.tech.map((tech, index) => (
    <img
      src={tech}
      alt={tech + " source image"}
      style={{ zIndex: index }}
      key={index}
      className="project-tech-icon"
    />
  ));

  return (
    <div className="card-container">
      <div className="project-card">
        <div className="project-view">
          <img
            src={props.image}
            alt="project image"
            className="project-image"
          />
        </div>
        <div className="project-info">
          <h2 className="project-title">{props.title}</h2>
          <p className="project-description">{props.description}</p>
          <div className="project-metadata">
            <div className="project-techs">{icons}</div>
            <a
              href="page.html"
              target="-blank"
              className="project-live-link"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <span>Check Live Site</span>
              <Arrow color={hover ? "#a365ff" : "#cbacf9"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
