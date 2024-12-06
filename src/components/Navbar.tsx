import React from "react";
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
        About <LinkLine />
      </div>
      <div className="link-container">Projects</div>
      <div className="link-container">Contact</div>
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
