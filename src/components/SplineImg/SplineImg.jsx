import React from 'react';
import placeholder from '../../Assets/Img.jpg'



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
