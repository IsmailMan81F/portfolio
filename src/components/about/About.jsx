import "../../index.css";
import "./About.css";
import CopyIcon from "./CopyIcon";

export default function About() {
  const stack1 = ["ReactJS", "Express", "Typescript", "NextJS"];
  const stack2 = ["VueJS", "NestJS", "GraphQL", "MongoDB"];
  const skills1 = stack1.map((tech, index) => (
    <div className="card" id={index}>
      {tech}
    </div>
  ));
  const skills2 = stack2.map((tech, index) => (
    <div className="card" id={index}>
      {tech}
    </div>
  ));

  return (
    <section className="porfolio">
      <div className="up-box">
        <div className="container1">
          <div className="el1">
            <h2 className="title">
              I prioritize client collaboration, fostering open
              communication{" "}
            </h2>
          </div>
        </div>
        <div className="up-right-box">
          <div className="container2">
            <div className="el2">
              <h2 className="title">
                I’m very flexible with time zone communications
              </h2>
            </div>
          </div>
          <div className="container3">
            <div className="el3">
              <div className="titles">
                <h3 className="subtitle">I constantly try to improve</h3>
                <h2 className="title">My tech stack</h2>
              </div>
              <div className="skills1-container">
                <div className="scrolling-up">{skills1}</div>
                <div className="scrolling-up" aria-hidden>{skills1}</div>
              </div>
              <div className="skills2-container">
                <div className="scrolling-down">{skills2}</div>
                <div className="scrolling-down" aria-hidden>{skills2}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="down-box">
        <div className="down-left-box">
          <div className="container4">
            <div className="el4">
              <h2 className="title">
                Tech enthusiast with a passion for development.
              </h2>
            </div>
          </div>
          <div className="container5">
            <div className="el5">
              <h2 className="title">
                Do you want to start a project together?
              </h2>
              <button className="button">
                <CopyIcon />
                <span>Copy my email address</span>
              </button>
            </div>
          </div>
        </div>
        <div className="container6">
          <div className="el6">
            <div className="titles">
              <h2 className="subtitle">The Inside Scoop</h2>
              <h2 className="title">
                Currently building a JS Animation library
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
