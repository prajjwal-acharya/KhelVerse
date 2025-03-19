import React from 'react';
import './style.css';

export function FlipCard({
  titleFront,
  titleBack,
  frontText,
  backText,
  frontImage,
  gradientBack,
  className = '',
}) {
  return (
    <div className={`flip-card ${className}`}>
      <div className='flip-card-inner'>
        {/* Front Side */}
        <div
          className='flip-card-front bg-black bg-cover bg-center bg-opacity-40'
          style={{
            backgroundImage: `url(${frontImage})`,
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darkening effect
          }}
        >
          <p className='text-lg font-bold font-sprintura text-lavender'>{titleFront}</p>
          <p className='text-m font-semibold'>{frontText}</p>
        </div>

        {/* Back Side */}
        <div className={`flip-card-back bg-black bg-gradient-to-tl ${gradientBack}`}>
          <p className='text-lg font-bold'>{titleBack}</p>
          <p className='text-sm p-2'>{backText}</p>
        </div>
      </div>
    </div>
  );
}
