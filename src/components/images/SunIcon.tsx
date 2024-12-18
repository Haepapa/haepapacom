import React from "react";

function SunIcon(): JSX.Element {
  return (
    <svg className="link-icon" width="20" height="20" viewBox="0 0 30 30">
      <circle cx="15" cy="15" r="6" fill="currentColor" />

      <line
        id="ray"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        x1="15"
        y1="1"
        x2="15"
        y2="4"
      ></line>

      <use href="#ray" transform="rotate(45 15 15)" />
      <use href="#ray" transform="rotate(90 15 15)" />
      <use href="#ray" transform="rotate(135 15 15)" />
      <use href="#ray" transform="rotate(180 15 15)" />
      <use href="#ray" transform="rotate(225 15 15)" />
      <use href="#ray" transform="rotate(270 15 15)" />
      <use href="#ray" transform="rotate(315 15 15)" />
    </svg>
  );
}

export default SunIcon;
