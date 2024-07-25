import React, { useState } from "react";
import App from '../components/Auth';

export default function Header() {
  const buttonText = "Login";
  const buttonAction = "signIn";
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#F5F4FF] w-full">
      <div className="container mx-auto px-4 sm:px-12 py-3 flex justify-between items-center">
        <div className="font-caprasimo text-3xl sm:text-5xl leading-[35px] sm:leading-[55.05px] font-normal">
          Bright
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-darkBlue text-3xl">
            ☰
          </button>
        </div>
        <ul className={`font-caprasimo flex-col lg:flex-row lg:flex space-x-0 lg:space-x-11 mt-3 ${menuOpen ? 'flex' : 'hidden lg:flex'}`}>
          <li className="text-darkBlue text-[20px] sm:text-[26px] py-2 lg:py-0">Home</li>
          <li className="text-darkBlue text-[20px] sm:text-[26px] py-2 lg:py-0">Courses</li>
          <li className="text-darkBlue text-[20px] sm:text-[26px] py-2 lg:py-0">Mentors</li>
          <li className="px-2 text-darkBlue text-[20px] sm:text-[26px] rounded-none relative py-2 lg:py-0">
            <App buttonText={buttonText} buttonAction={buttonAction} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
