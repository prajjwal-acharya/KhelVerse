'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

function Finance() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/dashboard/athlete/finance');
  };
  return (
    <div
      className='w-[50%] h-full rounded-xl text-wrap text-white flex justify-center items-center text-center overflow-clip bg-cover bg-center bg-no-repeat relative group cursor-pointer'
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dpmlrxlzr/image/upload/v1742211026/pexels-ravi-roshan-2875998-14907377_diqxsg.jpg")`,
      }}
      onClick={handleClick}
    >
      {/* Gradient Overlay */}
      <div className='absolute w-full h-full inset-0 bg-gradient-to-r from-black/90 to-black/50'></div>
      <div className='relative'>
        <h3 className='font-sprintura text-xl'>Finance</h3>
      </div>
    </div>
  );
}

export default Finance;
