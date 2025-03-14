import React from 'react';
import { Underline } from '../shared/SvgIcons';
import * as framerMotion from 'framer-motion';
const motion = framerMotion.motion;

import AboutUsImg from '../images/AboutUsImg.jpeg'; // Ensure correct import syntax


function AboutUs() {
  return (
    // section separator div
    <div className="w-full">
      <div className="relative w-full h-[50px] bg-white">
      <div className="absolute w-full h-full bg-black" style={{ clipPath: "polygon(0% 0%, 0% 100%, 100% 0%)" }}></div>
      </div>


     {/* content */}
      <div className="bg-white h-[85vh] w-full flex flex-col-reverse md:flex-row items-center justify-around">
        {/* left-content */}
       <div className="flex flex-col px-10 mx-10">
        <h2 className="font-bold text-3xl text-left mb-2">Revolutionizing <span className='text-purple'>Athlete Management</span> for <span className='text-purple'>Peak Performance.</span></h2>
         <p className="text-lg text-left max-w-[600px]">Minimize setbacks, maximize potential, and build champions.
         A unified platform that streamlines training, tracks progress, and supports career growth—empowering athletes, 
         coaches, and organizations to achieve excellence.</p>
        </div>
        {/* right-content */}
        <div className="bg-black w-[50vw] md:w-[40vw] h-[40vh] mr-10"></div>
      </div>

      <div className="relative w-full h-[50px] bg-white">
      <div className="absolute w-full h-full bg-black" style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}></div>
      </div>
  
   </div>
  );
}

export default AboutUs;
