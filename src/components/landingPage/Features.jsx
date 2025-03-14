"use client";

import { FlipCard } from "../shared/FlipCards/FlipCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("features-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.2 },
    }),
  };

  return (
    <div
      id="features-section"
      className="flex flex-col sm:flex-row h-full w-full bg-gradient-to-r from-black to-[#5629a0]"
    >
      {/* Left Section */}
      <div className="w-full h-[150px] sm:w-[35%] sm:h-auto flex flex-col items-center justify-center mt-10 text-white">
        <motion.h1
          className="font-bold font-thuast text-2xl sm:text-3xl flex  p-2 transform sm:rotate-[-10deg]"
        >
          {"FEATURES".split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={letterAnimation}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          className="font-bold font-thuast text-xl sm:text-2xl p-2 flex flex-wrap justify-center text-center transform sm:rotate-[-10deg]"
        >
          {"LIKE  NOWHERE  ELSE...".split(" ").map((word, wordIndex) => (
           <span key={wordIndex} className="flex">
           {word.split("").map((letter, letterIndex) => (
           <motion.span
          key={`${wordIndex}-${letterIndex}`}
          custom={letterIndex}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={letterAnimation}
        >
          {letter}
        </motion.span>
      ))}
      &nbsp; {/* Space between words */}
    </span>
  ))}
</motion.h2>


      </div>

      {/* Right Section */}
      <div className="w-full 2xl:w-[1100px] h-auto  py-[50px] flex flex-col justify-center gap-6 pt-20">
        <div className="flex justify-center gap-6 flex-wrap">
          {[
            { titleFront: "Performance Evaluation", backText: "AI-powered analysis" },
            { titleFront: "Diet Plans", backText: "Tailored meal plans" },
            { titleFront: "Live Training Sessions", backText: "Real-time coaching" },
            { titleFront: "Injury Management", backText: "Recovery strategies" },
            { titleFront: "Events", backText: "Exclusive competitions" },
          ].map(({ titleFront, backText }, index) => (
            <FlipCard
              key={index}
              titleFront={titleFront}
              frontText="Hover Me"
              titleBack="Insights"
              backText={backText}
              gradientFront="from-lavender/70 to-transparent"
              gradientBack="from-transparent to-pastelYellow/80"
              className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] p-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
