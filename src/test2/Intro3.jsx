import React from "react";
import teacher from "../assets/teacher.jpg";

const Intro3 = () => {
  return (
    <div className="container">
      <div className="flex w-full flex-col-reverse md:flex-row h-screen pt-[100px]">
        <div className="w-full h-full flex justify-center md:justify-start items-center">
          <div className="rounded-full shadow-lg p-2 w-[150px] md:w-[100%] lg:w-[90%] xl:w-[80%]">
            <img src={teacher} alt="teacher" className="w-full rounded-full" />
          </div>
        </div>
        <div className="w-full h-screen flex justify-center items-center text-blue-800">
          <div className="text-center md:pt-10 md:pb-20 w-full">
            <p className="text-2xl">For example:</p>
            <h1 className="intro-1 tshadow text-[200px] leading-[200px] lg:text-[300px] lg:leading-[310px]">
              Jj
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro3;
