import React from 'react';
import './style.css';

export function FlipCard({
  titleFront,
  frontText,
  backText,
  gradientBack,
  className = '',
}) {
  return (
    <div className={`flip-card ${className} ${gradientBack} bg-gradient-to-br from-[#0e0e16] to-[#161625]
    hover:from-black hover:to-[#240046]`}>

      {/* Front Side */}
      <div className="flip-card-content">
        <p className="title font-sprintura text-lavender text-xl h-[56px]">{titleFront}</p>
        <p className="text text-md my-2">{frontText}</p>
        <p className="back-text">{backText}</p>
      </div>

      {/* Loading Line Effect */}
      <div className="loading-line"></div>
    </div>
  );
}
