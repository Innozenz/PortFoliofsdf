import React from 'react';
import { useState, useEffect } from 'react';
import placeholder from '../../assets/Img.jpg'
import Spline from '@splinetool/react-spline';



export default function SplinePresentation() {

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverCount, setHoverCount] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleImageHover = () => {
    setHoverCount((prevCount) => prevCount + 1);
  };

  const getBlendMode = () => {
    switch (hoverCount) {
      case 1:
        return 'soft-light';
      case 2:
        return 'color';
      default:
        return 'normal';
    }
  };

  const initialBlendMode = 'hue';

  return (
    <div className='wrapper'>
      <div className='custom-cursor' style={{ left: cursorPosition.x, top: cursorPosition.y }}>
        <div className='light-effect'></div>
      </div>
      <div className='wrapper_design'>
        <img 
          className="wrapper_design_img" 
          src={placeholder} 
          alt="Placeholder"
          style={{ mixBlendMode: hoverCount > 0 ? getBlendMode() : initialBlendMode }}
          onMouseEnter={handleImageHover}
        />
        <Spline scene="https://prod.spline.design/8pPEgqGidOE2Rwlr/scene.splinecode" />

        <div className='overlay-text'>
          {hoverCount === 1 && <p>Loading....50%</p>}
          {hoverCount === 2 && <p>Loading...90%</p>}
        </div>

      </div>

      <div className='bar-container'>
        <div className='static-bar'></div>
        <div className='animated-bar'></div>
      </div>

          
      <div className='wrapper_text'>

        <p>
          Di Majo Wilsfried
          <br/>
          Développeur Front-End.
        </p>

      </div>
    </div>
  );
}
