import React, { useEffect, useState } from "react";
import githubImg from "../../Assets/github-icon.png";
import linkedinImg from "../../Assets/linkedin.png";

export default function Footer() {
  return (
    <div className="footer-content">
      <div className="flag first">
        <div className="flag__flagpole"></div>
        <div className="flag__canvas">
          <a
            href="https://github.com/Astuki?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="link_footer"
          >
            <img
              src={githubImg}
              alt="icone de Github Gratuite ( iconfinder from Picons.me )"
            />
          </a>
          <p className="footer-text">Mon Github</p>
        </div>
      </div>

      <div className="flag second">
      <div className="flag__canvas">
          <a
            href="https://www.linkedin.com/in/wilsfried-di-majo-45577327a/"
            target="_blank"
            rel="noopener noreferrer"
            className="link_footer"
          >
            <img
              src={linkedinImg}
              alt="icone de Linkedin gratuite ( iconfinder from Picons.me )"
            />
          </a>
          <p className="footer-text">Mon Linkedin</p>
        </div>
        <div className="flag__flagpole"></div>
      </div>
    </div>
  );
}
