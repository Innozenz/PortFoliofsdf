import React from 'react';
import placeholder from '../../assets/Img.jpg'
import Spline from '@splinetool/react-spline';



export default function SplineImg() {
  return (
    <div className='wrapper'>
      <div className='wrapper_design'>
        <img 
          className="wrapper_design_img" 
          src={placeholder} 
          alt="Placeholder"
        />
        <Spline scene="https://prod.spline.design/8pPEgqGidOE2Rwlr/scene.splinecode" />
      </div>
    </div>
  );
}
