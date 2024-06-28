import React from 'react';

export default function Header() {
    return (
        
           <nav className="bg-[#F5F4FF] w-full">
                <div className="container mx-auto px-12 py-3 flex justify-between items-center">
                    <div className="font-caprasimo text-[30px] leading-[55.05px] font-normal">
                        Bright
                    </div>
                    <ul className="font-caprasimo flex space-x-12">
                        <li className="text-darkBlue text-[15px]">Home</li>
                        <li className="text-darkBlue text-[15px]">Courses</li>
                        <li className="text-darkBlue text-[15px]">Mentors</li>
                        <li className="px-3 text-darkBlue text-[15px] border border-black   rounded-none relative">
                        Login
                    </li>
                    </ul>  
                </div>
            </nav>
        
    );
}
