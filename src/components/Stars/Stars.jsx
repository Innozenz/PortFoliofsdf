import React, { useEffect, useState } from 'react';

export default function Stars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const screenWidth = window.innerWidth + 100;
      const lineHeight = window.innerHeight;
      const numberOfLines = Math.floor(window.innerHeight / lineHeight);
      const maxStars = Math.floor((screenWidth / lineHeight) * 400 * numberOfLines); 
      const generatedStars = [];

      for (let i = 0; i < maxStars; i++) {
        const randomX = Math.floor(Math.random() * screenWidth );
        const randomY = Math.floor(Math.random() * lineHeight );
        const size = Math.random() < 0.1 ? 2 : 1; // 10% of stars are larger (width of 2px)
        generatedStars.push({ x: randomX, y: randomY, size: size });
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
        <div key={index} className={`star ${star.size === 2 ? 'large-star' : ''}`} 
             style={{ top: `${star.y}px`, left: `${star.x}px`, width: `${star.size}px`, height: `${star.size}px` }} />
      ))}
    </div>
  );
};
