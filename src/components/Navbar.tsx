import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import github from "../images/github.svg";
import styled from "@emotion/styled";
import ThemeToggler from "./ThemeToggler";
import GithubIcon from "./images/GithubIcon";

function Navbar(): JSX.Element {
  const LinkLine = styled.span({
    width: "3.25rem",
    height: "0.0625rem",
    background: "var(--Key-Color)",
  });

  return (
    <div className="navbar">
      <div className="link-container">
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
          About
        </Link>
        <LinkLine />
      </div>
      <div className="link-container">
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Projects
        </Link>
      </div>
      <div className="link-container">
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          Contact
        </Link>
      </div>
      <div className="link-container">
        <GithubIcon />
      </div>
      <div className="link-container">
        <ThemeToggler />
      </div>
    </div>
  );
}

export default Navbar;
