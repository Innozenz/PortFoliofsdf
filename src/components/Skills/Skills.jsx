import React from 'react';

import HTML from "../../Assets/Html.webp"
import CSS from "../../Assets/CSS.png"
import ReactLogo from "../../Assets/React.webp"
import ReduxLogo from "../../Assets/Redux.png"
import SASSLogo from "../../Assets/Sass.webp"
import ViteLogo from "../../Assets/Vite.webp"

export default function Skills() {
    const skillsData = [
      { name: 'HTML', imgSrc: HTML, alt: 'HTML Logo', gridRow: 1 },
      { name: 'CSS', imgSrc: CSS, alt: 'CSS Logo', gridRow: 2 },
      { name: 'SASS', imgSrc: SASSLogo, alt: 'SASS Logo', gridRow: 3 },
      { name: 'React', imgSrc: ReactLogo, alt: 'React Logo', gridRow: 4 },
      { name: 'Vite', imgSrc: ViteLogo, alt: 'Vite Logo', gridRow: 5 },
      { name: 'Redux', imgSrc: ReduxLogo, alt: 'Redux Logo', gridRow: 6 },
    ];
    
    const screenWidth = window.innerWidth;

    const increment = screenWidth > 650 ? 2 : 1;
    const multiplicator = screenWidth > 650 ? 4 : 3;

    const getRandomColumn = () => {
      let randomColumn;
      do {
        randomColumn = Math.floor(Math.random() * multiplicator) + increment; 
      } while (randomColumn === 1 || randomColumn === 6);
      return randomColumn;
    };
  
    return (
    <>
      <h2 className='Skills'>Les Technologies que j'ai déjà utilisées :</h2>
      <div className='SkillsWrapper'>
        {skillsData.map((skill, index) => (
          <div key={index} className='SkillContainer' style={{ gridColumn: getRandomColumn(), gridRow: skill.gridRow,  }}>
            <img
              className='SkillImg'
              src={skill.imgSrc}
              alt={skill.alt}
            />
            <p className='SkillName'>{skill.name}</p>
          </div>
        ))}
      </div>
    </>
    );
  }
  
