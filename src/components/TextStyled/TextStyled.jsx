import React, { useLayoutEffect, useRef, useState } from "react";

export default function TextStyled() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;

  const textRef = useRef();
  const [originalText, setOriginalText] = useState("Di Majo Wilsfried");
  const [animatedText, setAnimatedText] = useState("Développeur Front-End.");

  useLayoutEffect(() => {
    console.log("Effect is running");

    const onMouseOverHandler = () => {
      console.log("Mouseover event triggered");
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        setAnimatedText((prevText) =>
          prevText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return originalText[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("")
        );

        if (iteration >= originalText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const textElement = textRef.current;

    if (textElement) {
      textElement.addEventListener("mouseover", onMouseOverHandler);
    }

    return () => {
      console.log("Cleanup");
      clearInterval(interval);
    };
  }, [originalText]);

  return (
    <div className="textStyled">
      <p className="effect">
        {originalText}
      </p>
      <p className="effect">
        {animatedText}
      </p>
    </div>
  );
}
