import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function PageChange() {
  const location = useLocation();

  useEffect(() => {
    const linesEffect = document.querySelector(".linesEffect");
    const numLines = 35; 

    for (let i = 0; i < numLines; i++) {
      const line = document.createElement("div");
      line.className = "line";
      line.style.left = `${(i / numLines) * 100}%`; 
      line.style.animationDelay = `${i * 0.2}s`; 
      linesEffect.appendChild(line);
    }
  }, []);

  const getLinkDestination = () => {
    if (location.pathname === "/projects") {
      return "/";
    } else {
      return "/projects";
    }
  };

  return (
    <div className="changePage">
      <Link to={getLinkDestination()} className="link">
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
