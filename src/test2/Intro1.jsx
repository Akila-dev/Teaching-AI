import React from "react";

const Intro1 = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row w-full h-screen intro-1 py-10 xl:px-10 pt-[100px]">
        <div className="w-full flex-1 h-full bg-white flex flex-col justify-center items-center lg:items-start lg:pb-20 py-5 ">
          {/* <div className="lg:pl-20 pb-5">
          <img src={logo} alt="logo" className="w-30 md:w-[140px]" />
        </div> */}
          <h1 className="uppercase tshadow px-4 lg:pl-20 md:px-0 font-bold text-center lg:text-left text-blue-900 text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide leading-[45px] md:leading-[60px] lg:leading-[80px] xl:leading-[90px] lg:pt-16">
            Sounds of the
            <br />
            Alphabet
          </h1>
        </div>
        <div className="w-full flex-1 h-full p-5 flex justify-center items-center">
          <div className="bg-white rounded-full shadow-lg w-[300px] h-[300px] md:h-[340px] md:w-[350px] lg:h-[500px] lg:w-[500px] xl:h-[700px] xl:w-[700px] flex justify-center items-center">
            <div className="pulse-blue bg-blue-900 rounded-full w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] flex justify-center items-center">
              <h1 className="font-black text-white text-2xl lg:text-4xl tshadow">
                Lesson 1
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro1;
