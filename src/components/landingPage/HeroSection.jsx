import React from 'react'

function HeroSection() {
  return (
    <div className="bg-black h-screen w-full text-white">
      <div className=" flex flex-col items-center justify-center h-full w-full">
        <h1 className=' font-sprintura text-[70px] tracking-wider'>APTS</h1>
        <h2 className='text-[48px]'>Empowering India's Athletes, One Click at a Time</h2>
        <p>Your talent deserves more than just hard work—it needs the right support.</p>
        <p>Welcome to the future of athlete management, where technology meets passion.</p>
        <span>Track. Train. Triumph.(we can add this text in the loader instead as well)</span>
        <span>One platform, endless possibilities.</span>
        <button className='w-auto px-[20px] py-[5px] rounded-2xl bg-lavender text-black'>Get Started</button>
      </div>
    </div> 
  )
}

export default HeroSection