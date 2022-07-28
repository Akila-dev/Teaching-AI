import React from "react";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";

const ArrowBtns = () => {
  return (
    <div className="w-full lg:px-28 absolute bottom-0 left-0 pb-16 md:pb-28">
      <div className="container">
        <div className="flex justify-between">
          <div className="nav-btn-container p-3 lg:p-4 bg-blue-800 rounded-full text-white">
            <TiArrowLeftThick className="nav-btn text-white text-[30px] lg:text-[40px]" />
          </div>
          <div className="nav-btn-container p-3 lg:p-4 bg-blue-800 rounded-full text-white">
            <TiArrowRightThick className="nav-btn text-white text-[30px] lg:text-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrowBtns;
