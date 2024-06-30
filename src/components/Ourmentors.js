import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ellipse from '../assests/Ellipse 299.png'; // Import your mentor image
import Rating from './Rating';

const OurMentors = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    nextArrow: null,
    prevArrow: null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const mentors = [
    {
      id: 1,
      name: 'Jane Doe',
      title: 'Senior Web Developer',
      image: ellipse,
      rate: 2.4
    },
    {
      id: 2,
      name: 'John Blake Doe',
      title: 'Project Manager',
      image: ellipse,
      rate: 0
    },
    {
      id: 3,
      name: 'Magnus Glare',
      title: 'Historian',
      image: ellipse,
      rate: 3
    },
    {
      id: 4,
      name: 'Chris Evans',
      title: 'React Specialist',
      image: ellipse,
      rate: 4
    },
    {
      id: 5,
      name: 'Emma Watson',
      title: 'UI/UX Designer',
      image: ellipse,
      rate: 2
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="font-caprasimo text-4xl pl-16 leading-10 font-normal mb-8">
        Our Mentors
      </div>
      <Slider {...settings}>
        {mentors.map((mentor) => (
          <div key={mentor.id} className="px-1">
            <div className="bg-white p-4 w-[370px] h-[420px] flex flex-col justify-between items-center">
              <div className="relative w-40 h-40 mb-4">
                <span className="absolute inset-0 w-full h-full border border-black rounded-full transform -translate-x-1 translate-y-1 bg-[#a19ef7] z-0"></span>
                <span className="absolute inset-0 w-full h-full border border-black rounded-full bg-white z-10"></span>
                <img src={mentor.image} alt={mentor.name} className="relative z-20 h-full w-full object-cover rounded-full" />
              </div>
              <div className="flex flex-col flex-grow items-center">
                <h2 className="font-semibold text-xl">{mentor.name}</h2>
                <h3 className="text-md text-gray-500">{mentor.title}</h3>
                <div className="flex items-center ml-4">
                  <Rating rate={mentor.rate} /> {/* Pass the mentor's rate to Rating */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurMentors;
