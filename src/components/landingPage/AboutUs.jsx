import React from 'react'
import { Underline } from '../shared/SvgIcons'
function AboutUs() {
  return (
    <div className="w-full h-screen">
        <div className="bg-gradient-to-br from-lavender to-pastelYellow h-full w-full py-[50px]">
            <div className="top">
            <div className="left">
                <div className="flex justify-center items-center flex-col">
                <h3 className='font-thuast text-[30px]'>About Us</h3>
                <Underline height={6} width={200} fill='black'/>
                </div>
                <p>The Indian sports industry is growing, but athlete management is fragmented & outdated. We’re here to fix that.</p>
                <p><span>APTS</span> is a tech-driven platform that streamlines training, injury management, and career growth—all in one place.</p>
            </div>
            <div className="right">

            </div>
            </div>
            <div className="bottom">
                <span>No talent should go unnoticed. We make sure of that.</span>
                //this above line will have a handwritten font
            </div>
        </div>
    </div>
  )
}



export default AboutUs