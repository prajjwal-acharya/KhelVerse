import React from "react";
import { Underline } from "../shared/SvgIcons";

function Mission() {
  return (
    <div className="w-full min-h-screen">
      <div className="bg-black h-full w-full py-[50px] flex flex-col lg:flex-row items-center justify-around">
        {/* Left Circles Section */}
        <div className="flex flex-col items-center lg:items-center lg:mr-10">
          <Circle
            title={"Our mission"}
          />
        </div>

        {/* Right Text Section */}
        <div className="text-center lg:text-left mt-6 lg:mt-0 flex flex-col justify-center items-center relative">
       
        <div className="relative">
          {/* Lavender background (shadow) */}
          <div 
             className="h-[25vh] w-[80vw] lg:w-[30vw]   bg-gradient-to-r from-[#9697f8] to-[#dadafd] rounded-xl absolute top-4 right-4"
            style={{ clipPath: "polygon(7% 0%, 100% 0%, 93% 100%, 0% 100%)" }}>
           </div>

          {/* White foreground */}
          <div 
          className="h-[25vh] w-[80vw] lg:w-[30vw]  bg-white rounded-xl relative flex items-center justify-center"
          style={{ clipPath: "polygon(7% 0%, 100% 0%, 93% 100%, 0% 100%)" }}>
            <div className="text-center px-6">
            <h2 className="font-bold text-lg">Empowering Athlete Growth</h2>
            <p className="text-sm md:text-base">Provide a centralized platform for athletes, coaches, and sports organizations to track performance, manage careers, and unlock full potential.</p>
            </div>
          </div>
        </div>
         

        <div className="relative mt-10">
          {/* Lavender background (shadow) */}
          <div 
             className="h-[25vh] w-[80vw] lg:w-[30vw]  bg-gradient-to-r from-[#9697f8] to-[#dadafd] rounded-xl absolute top-4 right-4"
            style={{ clipPath: "polygon(7% 0%, 100% 0%, 93% 100%, 0% 100%)" }}>
           </div>

          {/* White foreground */}
          <div 
          className="h-[25vh] w-[80vw] lg:w-[30vw]  bg-white rounded-xl relative flex items-center justify-center"
          style={{ clipPath: "polygon(7% 0%, 100% 0%, 93% 100%, 0% 100%)" }}>
            <div className="text-center px-6">
            <h2 className="font-bold text-lg">Enhancing Performance & Well-being</h2>
            <p className="text-sm md:text-base"> Integrate data-driven insights for training optimization, injury prevention, and overall athlete well-being.</p>
            </div>
          </div>
        </div>

        <div className="relative mt-10">
          {/* Lavender background (shadow) */}
          <div 
             className="h-[25vh] w-[80vw] lg:w-[30vw]   bg-gradient-to-r from-[#9697f8] to-[#dadafd] rounded-xl absolute top-4 right-4"
            style={{ clipPath: "polygon(7% 0%, 100% 0%, 93% 100%, 0% 100%)" }}>
           </div>

          {/* White foreground */}
          <div 
          className="h-[25vh] w-[80vw] lg:w-[30vw]  bg-white rounded-xl relative flex items-center justify-center"
          style={{ clipPath: "polygon(7% 0%, 100% 0%, 93% 100%, 0% 100%)" }}>
            <div className="text-center px-6">
            <h2 className="font-bold text-lg">Building a Sustainable Sports Ecosystem</h2>
            <p className="text-sm md:text-base">Bridge the gap between athletes and support systems by offering financial management, and sponsorship opportunities.</p>
            </div>
          </div>
        </div>
       </div>

      </div>
      <div className="relative w-full h-[50px] bg-white">
      <div className="absolute w-full h-full bg-black" style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 0%)" }}></div>
      </div>
    </div>
  );
}

export default Mission;

export function Circle({ title }) {
  return (
    <div className="w-[200px] h-[200px] bg-white rounded-full p-4 flex flex-col items-center justify-center shadow-lg">
      <h3 className="font-semibold text-center font-thuast">{title}</h3>
    </div>
  );
}
