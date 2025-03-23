'use client';

import React from 'react';
import { Underline } from '../shared/SvgIcons';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

function Testimonials() {
  return (
    <div className='w-full'>
      <div className='relative w-full h-[50px] bg-white'>
        <div
          className='absolute w-full h-full bg-black'
          style={{ clipPath: 'polygon(0% 0%, 0% 100%, 100% 0%)' }}
        ></div>
      </div>

      <div className='w-full h-auto bg-white'>
        <div className=' h-full w-full py-[50px] flex flex-col items-center pt-20'>
          <h3 className='font-thuast text-2xl sm:text-3xl'>WHAT OUR CLIENTS SAY</h3>
          <Underline height={6} width={200} fill='black' />
        </div>
        {/* Infinite Moving Cards Section */}
        <div className='h-[60vh] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
          <InfiniteMovingCards items={testimonials} direction='' speed='slow' />
        </div>
        <div className='relative w-full h-[50px] bg-white'>
          <div
            className='absolute w-full h-full bg-black'
            style={{ clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)' }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

const testimonials = [
  {
    quote:
      'As a coach, I highly recommend this website. It provides detailed insights into performance tracking and training plans, making athlete development much more efficient!.',
    name: 'Arvind Nair',
    title: 'A Tale of Two Cities',
    img: 'https://res.cloudinary.com/dgj1gzq0l/image/upload/v1741878370/testimonial1_uhm3p8.jpg',
    role: 'Coach',
    stars: 5,
  },
  {
    quote:
      'The personalized workout plans and progress tracking features are game-changers. I’ve seen significant improvement in my endurance and speed!',
    name: 'Neha Reddy',
    title: 'Hamlet',
    img: 'https://res.cloudinary.com/dgj1gzq0l/image/upload/v1741878370/testimonial1_uhm3p8.jpg',
    role: 'Marathon Runner',
    stars: 4,
  },
  {
    quote:
      'I love how easy it is to schedule and monitor my training sessions. The analytics and performance insights have helped me refine my technique!',
    name: 'Harsh Rajput ',
    title: 'A Dream Within a Dream',
    img: 'https://res.cloudinary.com/dgj1gzq0l/image/upload/v1741878370/testimonial1_uhm3p8.jpg',
    role: 'High Jumper',
    stars: 5,
  },
  {
    quote:
      'Injury prevention tips, recovery techniques, and training insights—this site has everything an athlete needs to stay at their peak!',
    name: 'Meenal Joshi',
    title: 'Pride and Prejudice',
    img: 'https://res.cloudinary.com/dgj1gzq0l/image/upload/v1741878370/testimonial1_uhm3p8.jpg',
    role: 'Weight-lifter',
    stars: 4,
  },
  {
    quote:
      'Thanks to the tailored training modules and feedback system, I’ve improved my form and overall stamina. It’s like having a personal coach 24/7!',
    name: 'Vikram Sharma',
    title: 'Jake',
    img: 'https://res.cloudinary.com/dgj1gzq0l/image/upload/v1741878370/testimonial1_uhm3p8.jpg',
    role: 'Triathlete',
    stars: 3,
  },
];
