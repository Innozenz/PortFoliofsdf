import React, { useEffect, useState } from 'react';

export default function Stars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const screenWidth = window.innerWidth + 50;
      const lineHeight = window.innerHeight;
      const numberOfLines = Math.floor(window.innerHeight / lineHeight);
      const maxStars = Math.floor((screenWidth / lineHeight) * 400 * numberOfLines); 
      const generatedStars = [];

      for (let i = 0; i < maxStars; i++) {
        const randomX = Math.floor(Math.random() * screenWidth);
        const randomY = Math.floor(Math.random() * lineHeight);
        generatedStars.push({ x: randomX, y: randomY });
      }

      setStars(generatedStars);
    };

    generateStars();

    // event listener to regenerate stars on window resize
    const handleResize = () => {
      generateStars();
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star, index) => (
        <div key={index} className="star" style={{ top: `${star.y}px`, left: `${star.x}px` }} />
      ))}
    </div>
  );
};
