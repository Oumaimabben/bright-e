import React from "react";
import microsoft from '../assests/microsoft.png';
import coursera from '../assests/coursera.png';

const Partners = () => {
  
  return (
    <section >
      <div className="lg:pl-20 max-lg:p-4">
      <h1 className="text-black lg:text-4xl max-lg:text-lg font-montserrat font-medium lg:text-start max-lg:text-center mt-22 lg:mr-12">
          <span className="font-caprasimo">Our Partners</span>
        </h1>
      <p className="text-black lg:text-[20px] max-lg:text-[14px] font-montserrat font-medium lg:text-start max-lg:text-center  mt-[22px] lg:mr-12">
      <span className=" font-caprasimo">Bright</span> has established partnerships with leading companies and
        organizations in various industries. These partnerships offer <br />
        exclusive job placement opportunities to users who successfully complete relevant
        courses and certifications. By leveraging <br />
        these connections,  <span className="font-caprasimo">Bright</span> aims
        to bridge the gap between education and employment, providing a direct
        pathway to job <br />
         opportunities for its users.
      </p>
      
     
      <div className="grid grid-flow-col auto-cols-max gap-12 py-4" >
          <PartnerCard image={microsoft} name="Microsoft Learn" />
          <PartnerCard image={coursera} name="Coursera" />
          <PartnerCard image={microsoft} name="Microsoft Learn" />
          <PartnerCard image={coursera} name="Coursera" />
          <PartnerCard image={microsoft} name="Microsoft Learn" />
          <PartnerCard image={coursera} name="Coursera" />
        </div>
      </div>
    </section>
   
  );
};
const PartnerCard = ({ image, name }) => (
  <div className="flex flex-col items-center text-center">
    <img src={image} alt={name} className="w15 h-32 mb-2" />
    <h4 className="text-lg font-robotoserif font-semibold  ">{name}</h4>
  </div>
);

export default Partners;
