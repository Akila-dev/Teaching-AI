import React from "react";
import { BsFillMicFill } from "react-icons/bs";

const Exercise = ({ exercise, recording }) => {
  return (
    <div className="w-full h-screen z-50 ">
      <div className="container">
        <div className="flex justify-center items-center w-full h-screen">
          <h1 className="text-black text-center exercise-heading tracking-wide pb-8">
            {exercise}
          </h1>
        </div>
        <div className="w-full lg:px-28 absolute bottom-0 left-0 pb-8 md:pb-24 flex justify-center items-center">
          {recording ? (
            <div className="p-3 lg:p-4 bg-blue-800 rounded-full text-white;">
              <BsFillMicFill className="text-white text-[30px] lg:text-[35px]" />
            </div>
          ) : (
            <div className="p-3 lg:p-4 bg-gray-300 rounded-full text-white;">
              <BsFillMicFill className="text-white text-[30px] lg:text-[35px]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exercise;
