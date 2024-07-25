import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#F5F4FF] h-auto lg:h-[400px] max-lg:h-[450px] lg:px-16 lg:p-[70px] p-6">
      <div className="lg:flex lg:justify-between text-center lg:text-left">
        <div className="mb-6 lg:mb-0">
          <h4 className="font-robotoserif font-semibold text-4xl lg:text-6xl">
            Bright
          </h4>
          <p className="text-base text-blackish font-montserrat w-full lg:w-[348px] h-auto lg:h-[87px] mt-2 mx-auto lg:mx-0">
            BRIGHT, an e-learning platform revolutionizes learning with
            interactive education and gamification, making it easier and more
            entertaining.
          </p>
        </div>
        <div className="text-xl flex flex-wrap justify-center lg:justify-between w-full lg:w-2/5 md:w-3/5 sm:w-[70%] max-sm:w-full mx-auto lg:mx-0 lg:p-0 p-6">
          <div className="mb-4 lg:mb-0 w-1/2 lg:w-auto">
            <h5 className="text-blackish font-montserrat font-semibold mb-2">
              Site map
            </h5>
            <div className="opacity-80">
              <p>Home</p>
              <p>Courses</p>
              <p>Sign up</p>
              <p>Sign in</p>
              <p>Profile</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="mb-4 lg:mb-0 w-1/2 lg:w-auto">
            <h5 className="text-blackish font-montserrat font-semibold mb-2">
              Social media
            </h5>
            <div className="opacity-80">
              <p>Facebook</p>
              <p>Twitter</p>
              <p>LinkedIn</p>
              <p>Instagram</p>
            </div>
          </div>
          <div className="hidden lg:block">
            <h5 className="text-blackish font-montserrat font-semibold mb-2">
              Product
            </h5>
            <div className="opacity-80">
              <p>Pricing</p>
              <p>Partnership</p>
              <p>Sponsors</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex text-blackish font-montserrat font-medium text-base flex-col lg:flex-row justify-between mt-10 lg:mt-20">
        <p className="mb-2 lg:mb-0">
          Copyright 2023 “Bright” All rights reserved
        </p>
        <p className="mb-2 lg:mb-0">Powered by Dark Matter</p>
        <p className="mb-2 lg:mb-0">Terms and conditions</p>
        <p>Privacy policy</p>
      </div>
    </section>
  );
};

export default Footer;
