'use client';
import React from 'react';
import { AuroraBackground } from '@/components/ui/Aurora-background';

function FeatureHero({ title }) {
  return (
    <div className='w-full mt-[50px]'>
      <AuroraBackground className='w-full h-[200px] rounded-3xl relative flex flex-col justify-between p-4 overflow-hidden bg-black'>
        <div className='text-white text-3xl h-full font-bold font-sprintura tracking-wide w-full text-center flex items-center'>
          <h1 className='mx-auto'>{title}</h1>
        </div>
      </AuroraBackground>
    </div>
  );
}

export default FeatureHero;
