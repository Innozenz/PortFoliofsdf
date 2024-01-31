import React, { useEffect, useRef, useState } from "react";

export default function TextStyled() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;

  const handleMouseOver = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    const effectElements = document.querySelectorAll(".effect");

    effectElements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOver);

      return () => {
        element.removeEventListener("mouseover", handleMouseOver);
      };
    });
  }, []);

  return (
    <div className="textStyled">
      <p className="effect" data-value="Di Majo Wilsfried">
        Di Majo Wilsfried
      </p>
      <p className="effect" data-value="Développeur Web FrontEnd.">
        Développeur Web FrontEnd.
      </p>

      <p className="smoothTalk">
        Portant un attrait particulier pour le développement Web ainsi que l'UI et l'UX
      </p>
    </div>
  );
}