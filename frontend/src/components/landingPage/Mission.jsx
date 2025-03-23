'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: '-100px' });

  return (
    <div className='w-full min-h-screen overflow-x-hidden' ref={ref}>
      <div className='bg-black h-full w-full py-[50px] flex flex-col lg:flex-row items-center justify-around'>
        {/* Left Circles Section */}
        <div className='flex flex-col items-center lg:items-center lg:mr-10'>
          <Circle title={'Our mission'} />
        </div>

        {/* Right Text Section */}
        <div className='text-center lg:text-left mt-6 lg:mt-0 flex flex-col justify-center items-center relative '>
          {[
            {
              title: 'Empowering Athlete Growth',
              text: 'Provide a centralized platform for athletes, coaches, and sports organizations to track performance, manage careers, and unlock full potential.',
            },
            {
              title: 'Enhancing Performance & Well-being',
              text: 'Integrate data-driven insights for training optimization, injury prevention, and overall athlete well-being.',
            },
            {
              title: 'Building a Sustainable Sports Ecosystem',
              text: 'Bridge the gap between athletes and support systems by offering financial management, and sponsorship opportunities.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className='relative mt-10'
              initial={{ x: '100vw', opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.7, ease: 'easeOut' }}
            >
              {/* Lavender background (shadow) */}
              <div
                className='h-[25vh] w-[80vw] lg:w-[30vw] bg-gradient-to-r from-[#240046] to-[#dadafd] rounded-xl absolute top-4 right-4'
                style={{ clipPath: 'polygon(7% 0%, 100% 0%, 93% 100%, 0% 100%)' }}
              ></div>

              {/* White foreground */}
              <div
                className='h-[25vh] w-[80vw] lg:w-[30vw] bg-white rounded-xl relative flex items-center justify-center'
                style={{ clipPath: 'polygon(7% 0%, 100% 0%, 93% 100%, 0% 100%)' }}
              >
                <div className='text-center px-6'>
                  <h2 className='font-bold text-lg'>{item.title}</h2>
                  <p className='text-sm md:text-base'>{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className='relative w-full h-[50px] bg-white'>
        <div
          className='absolute w-full h-full bg-black'
          style={{ clipPath: 'polygon(100% 0%, 0% 100%, 0% 0%)' }}
        ></div>
      </div>
    </div>
  );
}

export default Mission;

export function Circle({ title }) {
  return (
    <div className='relative flex items-center justify-center'>
      {/* Animated Background Gradient Circle */}
      <div
        className='absolute w-[260px] h-[260px] lg:w-[300px] lg:h-[300px] rounded-full animate-gradientMove'
        style={{
          background: 'linear-gradient(330deg, #10002B, #240046, #5A189A)',
          backgroundSize: '180% 180%',
        }}
      ></div>

      {/* Foreground Circle */}
      <div className='w-[200px] h-[200px] bg-white rounded-full p-4 flex flex-col items-center justify-center shadow-lg relative'>
        <h3 className='font-semibold text-center font-thuast'>{title}</h3>
      </div>
    </div>
  );
}
