import React from "react";
import "./Navbar.css";
import github from "../images/github.svg";

function Navbar(): JSX.Element {
  return (
    <div className="navbar">
      <div className="link-container">
        About <span className="link-line"></span>
      </div>
      <div className="link-container">Projects</div>
      <div className="link-container">Contact</div>
      <div className="link-container">
        <img src={github} className="link-icon"></img>
      </div>
    </div>
  );
}

export default Navbar;
