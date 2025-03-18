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
      transition: { delay: i * 0.1, duration: 0.2, repeat: Infinity, repeatDelay: 2 },
    }),
  };

  return (
    <div>
     <div className="relative w-full h-[50px] bg-white">
      <div className="absolute w-full h-full bg-black" style={{ clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)" }}></div>
      </div>
    <div
      id="features-section"
      className="flex flex-col sm:flex-row h-full w-full bg-black"
    >
      {/* Left Section */}
      <div className="w-full h-[150px] sm:w-[40%] sm:h-auto flex flex-col items-center justify-center mt-10 text-white">
        <motion.h1
          className="font-bold font-thuast text-2xl sm:text-4xl flex  p-2 transform sm:rotate-[-10deg]"
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
<div className="w-full 2xl:w-[1100px] h-auto py-[50px] flex flex-col bg-black justify-center gap-6 pt-20">
  <div className="flex justify-center gap-6 flex-wrap">
    
    {/* Performance Evaluation FlipCard */}
    <FlipCard
      titleFront="PERFORMANCE EVALUATION"
      frontText="Measure. Improve. Excel."
      titleBack=""
      backText="AI-powered daily targets push athletes to their limits, tracking progress with precision. Based on task completion, personalized insights and smart suggestions fuel continuous improvement. "
      frontImage="https://res.cloudinary.com/dpmlrxlzr/image/upload/v1742152499/jonathan-borba-R0y_bEUjiOM-unsplash_zn4hf0.jpg"
      gradientBack="from-transparent to-lavender/60"
      className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] p-2"
    />

    {/* Diet Plans FlipCard */}
    <FlipCard
      titleFront="DIET PLANS"
      frontText="Fuel Your Body, Boost Your Game"
      titleBack=""
      backText="Get personalized meal plans based on your fitness targets and body requirements, ensuring optimal nutrition for peak performance. "
      frontImage="https://res.cloudinary.com/dpmlrxlzr/image/upload/v1742150882/louis-hansel-MlPD-AzZYMg-unsplash_io6m80.jpg"
      gradientBack="from-transparent to-lavender/60"
      className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] p-2"
    />

    {/* Live Training Sessions FlipCard */}
    <FlipCard
      titleFront="LIVE TRAINING SESSIONS"
      frontText="Train Smart, Train Live"
      titleBack=""
      backText="Experience interactive live training sessions that analyze your movements in real-time, providing instant feedback to help you maintain the perfect workout form!"
      frontImage="https://res.cloudinary.com/dpmlrxlzr/image/upload/v1742152471/pexels-victorfreitas-841130_fgberk.jpg"
      gradientBack="from-transparent to-lavender/60"
      className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] p-2 "
    />

    {/* Injury Management FlipCard */}
    <FlipCard
      titleFront="INJURY MANANGEMENT"
      frontText="Recover Stronger, Play Longer."
      titleBack=""
      backText="Injury history analysis tracks past incidents, evaluating frequency and severity to assess current risks. Personalized recovery plans ensure safer, stronger comebacks."
      frontImage="https://res.cloudinary.com/dpmlrxlzr/image/upload/v1742152745/pexels-olly-3760275_z37zc7.jpg"
      gradientBack="from-transparent to-lavender/60"
      className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] p-2"
    />

    {/* Events FlipCard */}
    <FlipCard
      titleFront="EVENTS"
      frontText="Compete, Celebrate, Conquer"
      titleBack=""
      backText="Engage in dynamic competitions and celebrate victories. Get real-time updates on upcoming events, personalized participation suggestions, and performance highlights."
      frontImage="https://res.cloudinary.com/dpmlrxlzr/image/upload/v1742211025/pexels-karolina-grabowska-6345328_dgzjgs.jpg"
      gradientBack="from-transparent to-lavender/60"
      className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] p-2"
    />

    {/* Finance FlipCard */}
    <FlipCard
      titleFront="FINANCE ASSISTANCE"
      frontText="Plan Smart, Play Hard"
      titleBack=""
      backText="Get tailored financial guidance for managing expenses, securing sponsorships, and accessing exclusive funding opportunities. Empower your athletic journey with financial confidence."
      frontImage="https://res.cloudinary.com/dpmlrxlzr/image/upload/v1742211026/pexels-ravi-roshan-2875998-14907377_diqxsg.jpg"
      gradientBack="from-transparent to-lavender/60"
      className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] p-2"
    />


  </div>
</div>

    </div>
    </div>
  );
}
