import React from "react";
import { Underline } from "../shared/SvgIcons";

function Mission() {
  return (
    <div className="w-full h-full">
      <div className="bg-gradient-to-bl from-pastelYellow to-pastelBlue h-full w-full py-[50px] flex flex-col lg:flex-row items-center justify-around">
        {/* Left Circles Section */}
        <div className="flex flex-col items-center lg:items-center lg:mr-10">
          <Circle
            title={missionText[0].title}
            description={missionText[0].description}
          />
          <div className="flex mt-4 space-x-6">
            <Circle
              title={missionText[1].title}
              description={missionText[1].description}
            />
            <Circle
              title={missionText[2].title}
              description={missionText[2].description}
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="text-center lg:text-left mt-6 lg:mt-0 flex flex-col justify-center items-center">
          <h3 className="font-thuast text-[30px]">Mission</h3>
          <Underline height={6} width={200} fill='black'/>

          <span className="text-lg font-semibold">
            Revolutionizing Athlete Management
          </span>
          <p className="mt-2 text-gray-700">Three Pillars of Our Mission</p>

          {/* Handmade arrow SVG pointing toward the circles */}
        </div>
      </div>
    </div>
  );
}

export default Mission;

export function Circle({ title, description }) {
  return (
    <div className="w-[200px] h-[200px] bg-white rounded-full p-4 flex flex-col items-center justify-center shadow-lg">
      <h3 className="font-semibold text-center">{title}</h3>
      <p className="text-center text-sm text-gray-600">{description}</p>
    </div>
  );
}

export const missionText = [
  {
    id: 1,
    title: "Smart Performance Insights",
    description: "Every stat, every move, tracked.",
  },
  {
    id: 2,
    title: "Holistic Athlete Well-being",
    description: "Injury prevention, diet, and recovery support.",
  },
  {
    id: 3,
    title: "Seamless Career Growth",
    description: "From local tournaments to global success.",
  },
];
