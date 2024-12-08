import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import github from "../images/github.svg";
import styled from "@emotion/styled";
import ThemeToggler from "./ThemeToggler";
import GithubIcon from "./images/GithubIcon";

function NavbarBackup(): JSX.Element {
  const [isNavExpanded, setIsNavExpanded] = React.useState(true);
  const LinkLine = styled.span({
    width: "3.25rem",
    height: "0.0625rem",
    background: "var(--Key-Color)",
  });

  return (
    <div className="navbar">
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <span
        className={isNavExpanded ? "navbar-links expanded" : "navbar-links"}
      >
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
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </div>
        <div className="link-container">
          <GithubIcon />
        </div>
        <div className="link-container">
          <ThemeToggler />
        </div>
      </span>
    </div>
  );
}

export default NavbarBackup;
