import React from "react";

/* Components imported */
import CustomCursor from "../components/CustomCursor/CustomCursor";
import Stars from "../components/Stars/Stars";
import Project from "../components/Projects/Project";
import Skills from "../components/Skills/Skills";
import Footer from "../components/Footer/Footer";
import PageChange from "../components/PageChange/PageChange";
/* Components imported */

/* JSON Data */
import jsonData from "../components/JsonData/Project.json";
/* JSON DATA */

/* Utilities */
import Projet8 from "../Assets/Appartement8.webp";
import Projet11 from "../Assets/Bank11.webp";
/* Utilities */

export default function Projects() {

  return (
    <div>
      <CustomCursor />
      <Stars />
      <nav className="on-top">
        <PageChange />
      </nav>
      <main className="flexboxProjects">
        <Project projectData={{ ...jsonData[0], pictures: [Projet8] }} />
        <Project projectData={{ ...jsonData[1], pictures: [Projet11] }} />
        {/* Modifier façon import ne pas à avoir à écrire, map sur les data directement  */}
        <Skills />
      </main>
      <footer className="contact-footer">
        <Footer />
      </footer>
    </div>
  );
}
