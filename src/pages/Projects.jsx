import React from "react";

/* Components imported */
import CustomCursor from "../components/CustomCursor/CustomCursor";
import Stars from "../components/Stars/Stars"
import Project from "../components/Projects/Project"
/* Components imported */

/* JSON Data */
import jsonData from "../components/JsonData/Project.json"
/* */

/* Utilities */
import Projet8 from "../Assets/Appartement8.webp"
import Projet11 from "../Assets/Bank11.webp"
/* Utilities */

export default function Projects() {
  return (
    <div>
      <CustomCursor />
      <Stars />
      <main className="flexboxProjects">
        <Project projectData={{ ...jsonData[0], pictures: [Projet8] }} />
        <Project projectData={{ ...jsonData[1], pictures: [Projet11] }} />
      </main>
      <footer></footer>
    </div>
  );
}
