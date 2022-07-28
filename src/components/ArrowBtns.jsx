import React from "react";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";

const ArrowBtns = () => {
  return (
    <div className="w-full lg:px-28 absolute bottom-0 left-0 pb-16 md:pb-28">
      <div className="container">
        <div className="flex justify-between">
          <div className="nav-btn-container">
            <TiArrowLeftThick className="nav-btn" />
          </div>
          <div className="nav-btn-container">
            <TiArrowRightThick className="nav-btn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrowBtns;
