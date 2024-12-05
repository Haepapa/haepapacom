import React from "react";
import "./About.css";

function About(): JSX.Element {
  return (
    <div className="about-container">
      <div className="title-container">
        <span className="title-heading">Haepapa</span>
        <span className="title-slogan">Turning ideas into real solutions</span>
        <div className="description-main">
          At Haepapa, we turn ideas into real solutions that make a difference.
          Based in New Zealand, we create{" "}
          <span className="description-callout">
            software and data analytics solutions
          </span>
          to help you work smarter and achieve more. Whether it’s building
          custom software or uncovering insights from data, we’re here to bring
          your vision to life.
        </div>
      </div>
    </div>
  );
}

export default About;
