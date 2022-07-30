import React from "react";
import { BsFillMicFill, BsCheck, BsFillCheckCircleFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const Exercise = ({
  text,
  recording,
  showCorrection,
  correction,
  wrong_word,
  showAnswer,
}) => {
  return (
    <div className="w-full h-screen z-50 ">
      <div className="container">
        <div className="flex justify-center lg:flex-row flex-col items-center w-full h-screen">
          {showCorrection ? (
            <>
              <h1 className="text-white text-center tracking-wide mb-4 bg-red-600 rounded-md px-5 py-3 lg:mr-5 sm-h1">
                <IoClose className="inline pr-3" />
                {wrong_word}
              </h1>
              <h1 className="text-white text-center tracking-wide mb-4 bg-blue-600 rounded-md px-5 py-3 sm-h1">
                <BsCheck className="inline pr-3" />
                {correction}
              </h1>
            </>
          ) : showAnswer ? (
            <h1 className="flex justify-center items-center flex-col text-blue-800 pulse-blue-sm text-center exercise-heading tracking-wide pb-8">
              <span className="block shadow-lg py-5 px-5 rounded-lg">
                {text}
              </span>
              <BsFillCheckCircleFill className="block text-blue-800 mt-3 lg:mt-5" />
            </h1>
          ) : (
            <h1 className="text-black shadow-lg py-5 px-5 text-center exercise-heading tracking-wide mb-8 rounded-lg">
              {text}
            </h1>
          )}
        </div>
        <div className="w-full lg:px-28 absolute bottom-0 left-0 pb-8 md:pb-24 flex justify-center items-center">
          {recording ? (
            <div className="p-3 lg:p-4 bg-blue-800 rounded-full text-white  pulse-blue">
              <BsFillMicFill className="text-white text-[30px] lg:text-[35px]" />
            </div>
          ) : (
            <div className="p-3 lg:p-4 bg-gray-300 rounded-full text-white">
              <BsFillMicFill className="text-white text-[30px] lg:text-[35px]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exercise;
