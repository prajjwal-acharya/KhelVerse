import React from 'react';

function Profiles() {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center">

      <div className="w-[350px] md:w-[800px] h-[85%] flex flex-col justify-center items-center">
        <div className="h-1/3 flex justify-center items-center">
          <img 
            src="https://res.cloudinary.com/dgj1gzq0l/image/upload/v1742274119/atheletedash_pgsvuv.svg" 
            alt="laptop-logo" 
            className="h-full w-auto"
          />
        </div>
        <div className="h-1/6 flex justify-center items-center w-[80%]">
          <img 
            src="https://res.cloudinary.com/dgj1gzq0l/image/upload/v1741860281/req2_kxmtyy.jpg" 
            alt="arrow-logo" 
            className="h-full w-full"
          />
        </div>
        <div className="h-1/4 md:h-1/3  flex justify-between items-center w-[90%]">
          <div className='h-full m-2'>
          <img 
            src="https://res.cloudinary.com/dgj1gzq0l/image/upload/v1741860780/MobMockup_h92jct.jpg" 
            alt="athlete" 
            className="h-full object-contain"
          />
          <h2 className='font-bold text-sm md:text-lg font-sprintura'>ATHELETE</h2>
          </div>
         
          <div className='h-full m-2'>
          <img 
            src="https://res.cloudinary.com/dgj1gzq0l/image/upload/v1741860780/MobMockup_h92jct.jpg" 
            alt="coach" 
            className="h-full "
          />
          <h2 className='font-bold text-sm md:text-lg font-sprintura'>COACH</h2>
          </div>

          <div className='h-full m-2'>
          <img 
            src="https://res.cloudinary.com/dgj1gzq0l/image/upload/v1741860780/MobMockup_h92jct.jpg" 
            alt="sponsor" 
            className="h-full object-contain"
          />
          <h2 className='font-bold text-sm md:text-lg font-sprintura'>SPONSOR</h2>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Profiles;
