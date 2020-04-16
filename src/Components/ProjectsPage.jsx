import React from "react";
import "../Styles/Containers.css";
import "../Styles/ProjectsPage.css";
import CalculatorProjectIMG from "../Images/Calculator-project.png";
import UnderConstruction from "../Images/under_construction.jpg";

export default class ProjectsPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="projects-title">Projects:</h1>

        <div className="github-link-div">
          <a
            className="link-github"
            href="https://github.com/AntonioSkopin"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h1>Link to Github</h1>
          </a>
        </div>

        <div className="boxes">
          <div className="project-box box1">
            <img src={CalculatorProjectIMG} />
            <a
              href="https://antonioskopin.github.io/react-calculator/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Link to site
            </a>
            <br />
            <a
              href="https://github.com/AntonioSkopin/react-calculator"
              rel="noopener noreferrer"
              target="_blank"
            >
              Link to code
            </a>
          </div>
          <div className="project-box box2">
            <img src={UnderConstruction} />
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <del>Link to site</del>
            </a>
            <br />
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <del>Link to code</del>
            </a>
          </div>
          <div className="project-box box3">
            <img src={UnderConstruction} />
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <del>Link to site</del>
            </a>
            <br />
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <del>Link to code</del>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
