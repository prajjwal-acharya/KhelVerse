"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

function HeroSection() {
  const words = ["Empowering","Transforming", "Advancing"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Video Background from Cloudinary */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover brightness-60" // Darkened video effect
        src="https://res.cloudinary.com/dgj1gzq0l/video/upload/v1741587269/sportsvideo_dqoqcp.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay to enhance text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative flex flex-col gap-4 items-center justify-center h-full text-white text-center px-4"
      >
        <h1 className="font-sprintura md:text-[70px] text-[50px] tracking-wider">APTS</h1>

        {/* Changing Word Effect */}
        <h2 className="md:text-[48px] text-[35px] font-thuast ">
          <motion.span
            key={index} // Ensures smooth transition
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-lavender"
          >
            {words[index]}
          </motion.span>{" "}
          Indian Athletes
        </h2>

        {/* <p>Your talent deserves more than just hard work—it needs the right support.</p> */}
        <p>Welcome to the future of athlete management, where technology meets passion.</p>
        {/* <span className="font-bold">Track. Train. Triumph.</span> */}
        <span className="text-lg font-bold">One platform, endless possibilities.</span>

        <button className="font-bold w-auto mt-9 px-[20px] py-[5px] rounded-2xl bg-lavender text-black shadow-none hover:text-white hover:bg-purple hover:shadow-2xl transition-all">
          GET STARTED
        </button>
      </motion.div>
      
    </div>
  );
}

export default HeroSection;
