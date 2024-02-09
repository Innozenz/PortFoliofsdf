import React, { useState, useEffect } from 'react';

import HTML from "../../Assets/Html.webp"
import CSS from "../../Assets/CSS.png"
import ReactLogo from "../../Assets/React.webp"
import ReduxLogo from "../../Assets/Redux.png"
import SASSLogo from "../../Assets/Sass.webp"
import ViteLogo from "../../Assets/Vite.webp"

export default function Skills() {

  const [multiplicator, setMultiplicator] = useState(1);

  const skillsData = [
    { name: 'HTML', imgSrc: HTML, alt: 'HTML Logo', gridRow: 1, gradient: 'linear-gradient(155deg, rgba(252,140,53,1) 0%, rgba(25,14,5,1) 70%)' },
    { name: 'CSS', imgSrc: CSS, alt: 'CSS Logo', gridRow: 2, gradient: 'linear-gradient(155deg, rgba(75,108,183,1) 0%, rgba(7,16,37,1) 70%)' },
    { name: 'SASS', imgSrc: SASSLogo, alt: 'SASS Logo', gridRow: 3, gradient: 'linear-gradient(145deg, rgba(191,118,210,1) 0%, rgba(16,2,22,1) 70%)' },
    { name: 'React', imgSrc: ReactLogo, alt: 'React Logo', gridRow: 4, gradient: 'linear-gradient(145deg, rgba(97,218,251,1) 0%, rgba(6,26,38,1) 70%)' },
    { name: 'Vite', imgSrc: ViteLogo, alt: 'Vite Logo', gridRow: 5, gradient: 'linear-gradient(145deg, rgba(122,92,255,1) 0%, rgba(14,16,60,1) 70%)' },
    { name: 'Redux', imgSrc: ReduxLogo, alt: 'Redux Logo', gridRow: 6, gradient: 'linear-gradient(145deg, rgba(118,74,188,1) 0%, rgba(23,8,46,1) 70%)' },
  ];

  const getRandomColumn = () => {
    let randomColumn;
    do {
      randomColumn = Math.floor(Math.random() * multiplicator);
      if (randomColumn === 0) {
        randomColumn += 1;
      }
    } while (randomColumn === 0);
    return randomColumn;
  };

  useEffect(() => {
    const handleResize = () => {
      const newMultiplicator = Math.floor(window.innerWidth / 185);
      setMultiplicator(newMultiplicator);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <h2 className='Skills'>Les Technologies que j'ai déjà utilisées :</h2>
      <div className='SkillsWrapper'>
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className='SkillContainer'
            style={{
              gridColumn: getRandomColumn(),
              gridRow: skill.gridRow,
              background: skill.gradient,
            }}
          >
            <img className='SkillImg' src={skill.imgSrc} alt={skill.alt} />
            <p className='SkillName'>{skill.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
