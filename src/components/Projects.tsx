import React from "react";
import "./Projects.css";
import "./Common.css";
import projectIcon from "../images/project-default.svg";
import ScrollDownArrow from "./images/ScrollDownArrow";

function Projects(): JSX.Element {
  return (
    <div className="page-container">
      <div className="page-title">Projects</div>

      <div className="project-container">
        <img src={projectIcon} className="project-iconn"></img>
        <div className="project-text">
          timotewb.com
          <div className="project-note">
            Personal website, terminal interface
          </div>
        </div>
        <div className="spacer"></div>
        <div className="button">Live Demo</div>
      </div>

      <div className="project-container">
        <img src={projectIcon} className="project-iconn"></img>
        <div className="project-text">
          timotewb.com
          <div className="project-note">
            Personal website, terminal interface
          </div>
        </div>
        <div className="spacer"></div>
        <div className="button">Live Demo</div>
      </div>
      <ScrollDownArrow targetId="contact" />
    </div>
  );
}

export default Projects;
