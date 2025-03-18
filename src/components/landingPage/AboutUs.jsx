"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function AboutUs() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-us");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const totalHeight = Math.min(rect.height, window.innerHeight);

      // Calculate the visibility percentage of the section
      let visibility = Math.max(0, Math.min(1, visibleHeight / totalHeight));

      setScrollPercentage(visibility);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set values
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="about-us" className="w-full relative">
      {/* Top Section Separator */}
      <div className="relative w-full h-[50px] bg-white">
        <div className="absolute w-full h-full bg-black" style={{ clipPath: "polygon(0% 0%, 0% 100%, 100% 0%)" }}></div>
      </div>

      {/* Content Section */}
      <motion.div
        className="bg-white h-[85vh] w-full flex flex-col-reverse md:flex-row items-center justify-around"
        style={{
          opacity: 1 + scrollPercentage * 0, // Ranges from 0.4 to 1 (0% to 100% visibility)
          filter: `blur(${(1 - scrollPercentage) * 5}px)`, // More blur when less visible
          transition: "opacity 0s, filter 0s",
        }}
      >
        {/* Left Content */}
        <div className="flex flex-col px-10 mx-10">
          <h2 className="font-bold text-xl sm:text-3xl text-left mb-2">
            Revolutionizing <span className="text-purple">Athlete Management</span> for{" "}
            <span className="text-purple">Peak Performance.</span>
          </h2>
          <p className=" text-md sm:text-lg text-left max-w-[600px]">
            Minimize setbacks, maximize potential, and build champions. A unified platform that streamlines training,
            tracks progress, and supports career growth—empowering athletes, coaches, and organizations to achieve
            excellence.
          </p>
        </div>
        {/* Right Content */}
        <div className="w-[50vw] md:w-[40vw] h-[40vh] mr-10">
        <img 
            src="https://res.cloudinary.com/dgj1gzq0l/image/upload/v1742274119/atheletedash_pgsvuv.svg" 
            alt="laptop-logo" 
            className="h-full w-auto"
          />
        </div>
      </motion.div>

      {/* Bottom Section Separator */}
      <div className="relative w-full h-[50px] bg-white">
        <div className="absolute w-full h-full bg-black" style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}></div>
      </div>
    </div>
  );
}

export default AboutUs;
