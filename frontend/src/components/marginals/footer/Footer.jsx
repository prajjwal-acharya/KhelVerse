import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className='bg-black text-white py-8 px-4'>
      <div className='w-full mx-auto flex flex-col items-center h-auto'>
        {/* Top Section */}
        <div className='w-full flex flex-wrap justify-around text-sm text-gray-300 mb-8'>
          <div className='text-center md:text-left'>
            <h3 className='font-bold text-xl mt-2'>Company</h3>
            <p className='my-1 text-md'>Home</p>
            <p className='my-1'> Sign Up</p>
          </div>
          <div className='text-center md:text-left'>
            <h3 className='font-bold text-xl mt-2'>Further Information</h3>
            <p className='my-1'>Terms and Condition</p>
            <p className='my-1'>Sign Up</p>
          </div>

          <div className='text-center md:text-left'>
            <h3 className='font-bold text-xl mt-4 sm:mt-2'>Let's Connect!</h3>
            <div className='flex justify-center md:justify-start space-x-4 py-2 mt-2'>
              <FaLinkedin className='text-xl' />
              <FaGithub className='text-xl' />
              <FaInstagram className='text-xl' />
              <FaEnvelope className='text-xl' />
              <FaXTwitter className='text-xl' />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-800 w-full my-6 text-center py-4'>
          <h2 className='py-3 text-xl sm:text-3xl font-sprintura'>TRACK.TRAIN.TRIUMPH.</h2>
          <p className='mt-2 font-bold text-l'>
            Made with ✨ by Team <span className='font-sprintura px-1'>APTS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
