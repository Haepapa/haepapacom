import React from "react";

function MoonIcon(): JSX.Element {
  return (
    <svg className="link-icon" width="20" height="20" viewBox="0 0 30 30">
      <path
        fill="currentColor"
        d="
      M 23, 5
      A 12 12 0 1 0 23, 25
      A 12 12 0 0 1 23, 5"
      />
    </svg>
  );
}

export default MoonIcon;
