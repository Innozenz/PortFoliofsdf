import React, { useEffect, useState } from 'react';

export default function Stars() {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  const getRandomColor = () => {
    const colors = ['blue', 'red', 'yellow', 'purple', 'orange'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const generateStars = () => {
      const screenWidth = window.innerWidth + 100;
      const lineHeight = window.innerHeight;
      const numberOfLines = Math.floor(window.innerHeight / lineHeight);
      const maxStars = Math.floor((screenWidth / lineHeight) * 400 * numberOfLines);
      const generatedStars = [];
      const generatedShootingStars = [];

      for (let i = 0; i < maxStars; i++) {
        const randomX = Math.floor(Math.random() * screenWidth);
        const randomY = Math.floor(Math.random() * lineHeight);
        generatedStars.push({ x: randomX, y: randomY });

        // Generate shooting stars
        if (Math.random() < 0.10) {
          // 10% chance of a shooting star to see
          const color = getRandomColor();
          generatedShootingStars.push({
            x: screenWidth,
            y: Math.floor(Math.random() * lineHeight),
            speed: Math.random() * 3 + 2,
            color: color,
          });
        }
      }

      setStars(generatedStars);
      setShootingStars(generatedShootingStars);
    };

    const moveShootingStars = () => {
      setShootingStars((prevShootingStars) => {
        return prevShootingStars.map((star) => ({
          ...star,
          x: star.x - star.speed,
        })).filter((star) => star.x > 0); // Remove stars that went off-screen
      });
    };

    // Generate stars and set up shooting stars
    generateStars();

    // Interval to move shooting stars
    const shootingStarsInterval = setInterval(moveShootingStars, 30);

    // Event listener to regenerate stars on window resize
    const handleResize = () => {
      generateStars();
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener and shooting stars interval when the component unmounts
    return () => {
      clearInterval(shootingStarsInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star, index) => (
        <div key={index} className="star" style={{ top: `${star.y}px`, left: `${star.x}px` }} />
      ))}
      {shootingStars.map((star, index) => (
        <div
          key={index}
          className={`shooting-star ${star.color}`}
          style={{
            top: `${star.y}px`,
            left: `${star.x}px`,
          }}
        />
      ))}
    </div>
  );
}

/* Possibility of upgrade, make a min and max numbers of shooting stars and adding a minimum number of lines between each "shooting stars" and see if colors better or not
See if able to make it so stars can have various size ( has been deleted see if able to make it again ) */