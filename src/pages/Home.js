import React from 'react';
import CursorImage from '../assets/Cursor.png';
import girl from '../assets/girl.gif';

export default function Home() {
  return (
    <div>
      <div className="container bg-[#F5F4FF] flex flex-col md:flex-row mx-auto px-12 space-x-6">
        <div className="md:w-1/2 flex flex-col space-y-5 justify-center py-6">
          <h1 className="font-caprasimo text-5xl font-bold mb-4">
            Bright Future 
            starts with the right 
            education
          </h1>
          <p className="font-montserrat text-lg mb-6">
            Online courses never easier to access with Bright, meeting the best pricing, best mentors and best planning to achieve your goals in the deadlines following your own schedule and time preferences!
          </p>
          <div className="flex flex-col items-start space-y-4">
            <button className="py-1 px-3 font-caprasimo border border-black shadow-lg shadow-indigo-500/50">
              Sign up now
            </button>
            <div className="flex flex-col items-start mt-2">
              <img src={CursorImage} alt="cursor" className="w-13  ml-16"/>
              <button className="bg-[#A19EF7] text-white font-montserrat px-6 py-1 rounded-none mt-[-50px] ml-[121px]">
                Click!
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mb-[-40px]">
          <img src={girl} alt="Illustration" className="max-w-full h-auto"/>
        </div>
      </div>
    </div>
  );
}
