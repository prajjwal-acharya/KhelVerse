'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards');
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse');
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '10s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item) => (
          <li
            className='bg-black h-[300px] w-[450px] md:w-[550px] rounded-lg flex text-white border border-slate-700 px-8 py-6 justify-center items-center shrink-0'
            key={item.name}
          >
            {/* Left side */}
            <div className='flex flex-col justify-center items-center w-[40%] p-4'>
              <div className='h-[60%] m-5 mb-2 p-2 w-full'>
                <img
                  src={item.img}
                  alt={item.name}
                  className='h-full w-full rounded-xl object-cover'
                />
              </div>
              <div className='flex flex-col justify-center items-center mb-4 pb-2'>
                <h1 className='text-md font-bold text-lavender'>{item.name}</h1>
                <h2 className='text-sm font-semibold text-lavender'>{item.role}</h2>
              </div>
            </div>

            {/* Right side */}
            <div className='flex flex-col justify-center items-center w-[60%] p-4 relative'>
              <div className='w-full flex justify-start p-1'>
                <img
                  src='https://res.cloudinary.com/dgj1gzq0l/image/upload/v1741886291/processed_image_edqe39.jpg'
                  alt='quote'
                  className='h-[20px] w-[20px]'
                />
              </div>

              <p className='text-sm text-center mx-auto'>{item.quote}</p>

              <div className='w-full flex justify-end p-1'>
                <img
                  src='https://res.cloudinary.com/dgj1gzq0l/image/upload/v1741886302/inverted_commas_gtzbez.jpg'
                  alt='quote'
                  className='h-[20px] w-[20px]'
                />
              </div>

              {/* Dynamic Star Ratings */}
              <StarRating stars={item.stars} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Star Rating Component
const StarRating = ({ stars }) => {
  return (
    <div className='flex justify-center mt-2 text-lg'>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className={index < stars ? 'text-yellow-400' : 'text-gray-400'}>
          ★
        </span>
      ))}
    </div>
  );
};
