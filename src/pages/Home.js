import React from 'react';
import CursorImage from '../assests/Cursor.png';
import girl from '../assests/girl.gif';
import rectangle from '../assests/Rectangle 10.png'; // Ajoutez le chemin de votre image de fond ici

export default function Home() {
  return (
    <div>
      <div className="container bg-[#F5F4FF] flex flex-col md:flex-row mx-auto px-12 space-x-6 relative">
        {/* Contenu gauche */}
        <div className="md:w-1/2 flex flex-col space-y-5 justify-center py-14 my-9 relative z-10">
          <div className="font-caprasimo text-5xl font-bold mb-4">
            <h1 className='mb-4'>Bright Future</h1> 
            <h1 className='mb-4'>starts with</h1>
            <h1 className='mb-4'>the right</h1>
            education
          </div>
          <div>
            <p className="font-montserrat text-lg mb-6">
              Online courses never easier to access with Bright,<br/>
              meeting the best pricing, best mentors and best <br/>
              planning to achieve your goals in the deadlines <br/>
              following your own schedule and time preferences!
            </p>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <button className="relative w-56 h-12 py-1 px-3 border border-black text-black font-semibold bg-white">
              <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-[#a19ef7] z-0"></span>
              <span className="absolute inset-0 border border-black bg-white z-10"></span>
              <span className="relative z-20 font-caprasimo text-[26px] font-normal">Sign Up now</span>
            </button>

            <div className="flex flex-col items-start mt-2">
              <img src={CursorImage} alt="cursor" className="w-13 ml-16"/>
              <button className="bg-[#A19EF7] text-white font-montserrat px-6 py-1 rounded-none mt-[-50px] ml-[121px]">
                Click!
              </button>
            </div>
          </div>
        </div>

        {/* Image girl avec image de fond rectangle 10 */}
        <div className="w-[630px] flex justify-center mb-[-40px] h-[408px] mt-52 relative z-10">
          <div className="relative">
            {/* Image de fond seulement derrière girl */}
            <img src={rectangle} alt="Background" className="absolute inset-0  ml-28 -m-16  z-0 w-[250px] h-[424px]" />
            {/* Image girl au premier plan */}
            <img src={girl} alt="Illustration" className="max-w-[400px] h-[400px]"/>
          </div>
        </div>
      </div>
    </div>
  );
}
