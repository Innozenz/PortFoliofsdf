import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function PageChange() {
  useEffect(() => {
    const linesEffect = document.querySelector(".linesEffect");
    const numLines = 25; // Adjust the number of lines

    for (let i = 0; i < numLines; i++) {
      const line = document.createElement("div");
      line.className = "line";
      line.style.left = `${(i / numLines) * 100}%`; // Evenly spaced
      line.style.animationDelay = `${i * 0.2}s`; // Adjust the delay if needed
      linesEffect.appendChild(line);
    }
  }, []);

  return (
    <div className="changePage">
      <Link to="/projects" className="link">
        <FontAwesomeIcon
          icon={faAngleDown}
          className="arrowDown"
          alt="Flèche permettant de changer de page !"
        />
      </Link>
      <div className="linesEffect"></div>
    </div>
  );
}
