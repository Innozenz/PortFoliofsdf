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
      </div>
    </div>
  );
}
