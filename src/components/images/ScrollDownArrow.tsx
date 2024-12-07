import React from "react";
import { Link } from "react-scroll";
import "./ScrollDownArrow.css";

function ScrollDownArrow({ targetId }: { targetId: string }): JSX.Element {
  return (
    <Link
      to={targetId}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="chevron-container"
    >
      <div className="chevron"></div>
      <div className="chevron"></div>
      <div className="chevron"></div>
    </Link>
  );
}

export default ScrollDownArrow;
