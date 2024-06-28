import React from 'react'

export default function Home() {
  return (
    <div>
      <div className=" container bg-[#F5F4FF] flex flex-col md:flex-row mx-auto  px-12 space-x-6">
        <div className="md:w-1/2  flex flex-col space-y-5 justify-center py-6">
          <h1 className=" font-caprasimo text-5xl font-bold mb-4">
            Bright Future 
            starts with the right 
            education
          </h1>
          <p className="font-montserrat text-lg  mb-6">
            Online courses never easier to access with Bright, meeting the best pricing, best mentors and best planning to achieve your goals in the deadlines following your own schedule and time preferences!
          </p>
          <button class="font-caprasimo  border border-black shadow-lg shadow-indigo-500/50 ...">Subscribe</button>

        </div>
        <div className="md:w-1/2">
          <img src="your-image-path" alt="Illustration" className="max-w-full h-auto"/>
        </div>
        </div>
    </div>
  )
}
