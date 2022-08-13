import React from "react";
import teacher from "../assets/teacher.jpg";

const Intro3 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-screen px-5 md:px-10 lg:px-20 xl:px-40 pt-[120px] md:pt-0">
        <div className="w-full h-full flex justify-start items-center">
          <div className="rounded-full shadow-lg p-2 w-[100%] lg:w-[90%] xl:w-[80%]">
            <img src={teacher} alt="teacher" className="w-full rounded-full" />
          </div>
        </div>
        <div className="w-full h-screen flex justify-center items-center font-bold text-blue-900 relative">
          {/* <img
            src={logo}
            alt="logo"
            className="w-[120px] md:w-[140px] self-center md:self-end"
          /> */}
          <div className="flex flex-col text-center">
            <p className="text-2xl pb-12 md:pb-24">For example:</p>
            <h1 className="text-[100px] md:text-[250px] intro-1 tshadow">Jj</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro3;
