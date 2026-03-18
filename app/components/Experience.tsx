import React from "react";

function Experience() {
  return (
    <div className=" flex py-24 px-6 gap-12 overflow-hidden justify-between mx-auto w-full h-full bg-[#121212]">
      <div className=" w-full h-full flex flex-col lg:flex-row justify-between gap-20 max-w-350 mx-auto">
        <div className=" w-full lg:w-[15%] flex md:flex-col justify-center md:justify-start">
          <div className=" max-w-full text-left">
            <img
              src="https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/restaurant-84ZFL67.jpg"
              alt="image"
              className=" w-62.5 lg:w-full h-37.5 lg:h-75 object-cover object-center rounded lg:rounded-xl inline-block align-middle"
            />
          </div>
        </div>
        <div className=" flex flex-col min-h-104 justify-center items-center lg:w-[50%] gap-6">
          <div className=" w-[47%] max-w-full p-1.5 border-b border-[#d8bc30] text-center">
            <h2 className=" text-base font-normal uppercase tracking-[4px]">
              Sustainable Luxury
            </h2>
          </div>
          <div className=" w-full max-w-full text-center">
            <h2 className=" text-4xl md:text-5xl font-normal">
              {" "}
              Experience Modern Living, Redefinded in Luxury
            </h2>
          </div>
          <div className=" w-full max-w-full text-center text-[#DBDBDB]">
            <p className=" text-lg md:text-xl font-normal">
              Your dream residence awaits — a masterpiece of architecture,
              design, and sophistication. Let us guide you to the home where
              elegance and innovation live in perfect harmony.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-[15%] flex md:flex-col justify-center md:justify-end">
          <div className=" max-w-full text-left">
            <img
              src="	https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/design-XYM7RW7.jpg"
              alt="image"
              className=" w-62.5 lg:w-full h-37.5 lg:h-75 object-cover object-center rounded md:rounded-xl inline-block align-middle"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
