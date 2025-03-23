import React from 'react';
import AthleteHero from './AthleteHero';
import AthleteBody from './AthleteBody';

function AthleteMain() {
  return (
    <div className='w-full min-h-screen bg-cover bg-center bg-no-repeat bg-black pb-[30px]'>
      {/* style={{
        backgroundImage: "url('https://res.cloudinary.com/dpmlrxlzr/image/upload/v1742150476/6.0_inp9st.svg')"
      }}> */}
      <AthleteHero />
      <AthleteBody />
    </div>
  );
}

export default AthleteMain;
