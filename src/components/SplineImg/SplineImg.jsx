import React from 'react';
import placeholder from '../../assets/Img.jpg'
import Spline from '@splinetool/react-spline';



export default function SplineImg() {
  return (
    <div>
      <div className='wrapper'>
        <img 
          className="wrapper_img" 
          src={placeholder} 
          alt="Placeholder"
        />
        {/* <Spline className="wrapper_spline" scene="https://prod.spline.design/8pPEgqGidOE2Rwlr/scene.splinecode" /> */}
      </div>
    </div>
  );
}
