import React from 'react';
import './style.css';

export function FlipCard({
  height,
  width,
  titleFront,
  titleBack,
  frontText,
  backText,
  gradientFront,
  gradientBack,
}) {
  return (
    <div className='flip-card' style={{ height: `${height}px`, width: `${width}px` }}>
      <div className='flip-card-inner'>
        {/* Front Side */}
        <div className={`flip-card-front bg-black bg-gradient-to-br ${gradientFront}`}>
          <p className='text-lg font-bold'>{titleFront}</p>
          <p className='text-sm'>{frontText}</p>
        </div>

        {/* Back Side */}
        <div className={`flip-card-back bg-black bg-gradient-to-tl ${gradientBack}`}>
          <p className='text-lg font-bold'>{titleBack}</p>
          <p className='text-sm'>{backText}</p>
        </div>
      </div>
    </div>
  );
}
