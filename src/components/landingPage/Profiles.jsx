import React from 'react';

function Profiles() {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold mb-2 font-thuast">Profiles</h1>
      <div className="w-[800px] h-[85%] flex flex-col justify-center items-center">
        <div className="h-1/3 flex justify-center items-center">
          <img 
            src="https://res.cloudinary.com/dgj1gzq0l/image/upload/v1741860736/laptopmockup_qp5grp.jpg" 
            alt="laptop-logo" 
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="h-1/6 flex justify-center items-center w-[80%]">
          <img 
            src="https://res.cloudinary.com/dgj1gzq0l/image/upload/v1741860281/req2_kxmtyy.jpg" 
            alt="arrow-logo" 
            className="h-full w-full"
          />
        </div>
        <div className="h-1/3  flex justify-between items-center w-[90%]">
          <img 
            src="https://res.cloudinary.com/dgj1gzq0l/image/upload/v1741860780/MobMockup_h92jct.jpg" 
            alt="athlete" 
            className="h-full object-contain"
          />
          <img 
            src="https://res.cloudinary.com/dgj1gzq0l/image/upload/v1741860780/MobMockup_h92jct.jpg" 
            alt="coaches" 
            className="h-full object-contain"
          />
          <img 
            src="https://res.cloudinary.com/dgj1gzq0l/image/upload/v1741860780/MobMockup_h92jct.jpg" 
            alt="organisations" 
            className="h-full object-contain"
          />
        </div>
        {/* <div className='h-1/6 flex justify-between items-center w-[90%] ml-20 mr-20'>
            <p>Athelete</p>
            <p>Coaches</p>
            <p>Sponsors</p>
          </div> */}
      </div>
      
    </div>
  );
}

export default Profiles;
