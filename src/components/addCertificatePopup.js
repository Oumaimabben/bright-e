import React, { useState } from "react";

const AddCertificatePopup = (props) => {
  const [Certification, setCertification] = useState("");
  

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  
  const handleChangeCertification = (event) => {
    setCertification(event.target.value);
  };
  const handleAddClick = () => {
    const certificationData = {
      Certification: Certification,
      
    };
  
    props.onAddCertification(certificationData);
  
    togglePopup();
    
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className=" text-center">
      <button onClick={togglePopup} className="transform transition duration-300 hover:translate-y-2 pr-2 py-2 border shadow-shdB text-[14px] h-9 ml-3 mt-4 w-[119px] font-monteserrat text-darkgray">Add certificate</button>
      {isPopupVisible && (
        <div className="absolute bg-white  border-2 border-gray-400 top-[340px] left-72 w-[500px] h-[370px]">
          <div className="font-monteserrat text-xl mt-8">Add certificate</div>
          <input
            className="border broder-1 p-3 border-gray-400 shadow-shdInsetPurp h-11 w-[320px] mt-6  text-sm font-monteserrat outline-none"
            type="text"
            value={Certification}
            onChange={handleChangeCertification}
            placeholder="certificates"
            required
          />
          
          <div>
            <button
              onClick={handleAddClick}
              className="transform transition duration-300 hover:translate-y-2 pr-2 py-2 border shadow-shdB text-[14px] h-9 ml-3 mt-6 w-[100px] font-monteserrat text-darkgray"
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCertificatePopup;
