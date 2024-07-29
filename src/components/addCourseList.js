import React from "react";
import gradution from "../assets/graduationHat.svg";
import playButton from "../assets/playButton.svg";
import radio from "../assets/radio.svg";

const AddCourseList = ({ category, title }) => {
  let src = "";
  let displayTitle = title;

  if (category === "certificate") {
    src = gradution;
    displayTitle = "certificate";
  } else if (category === "video") {
    src = playButton;
  } else if (category === "quiz") {
    src = radio;
    displayTitle = "quiz";
  }

  return (
    <div className="flex items-center ">
      <div className="mr-7">
        <img src={src} alt={category} className="" />
      </div>
      <div className="mr-7 w-60 flex text-black text-lg font-normal font-montserrat">
        <div>01.</div>
        <div className="text-black text-lg font-normal font-montserrat ml-2">
          {displayTitle}
        </div>
      </div>
      <div className="mr-4">2min</div>
    </div>
  );
};

export default AddCourseList;
