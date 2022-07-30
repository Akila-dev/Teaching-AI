import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";
import { Link } from "react-router-dom";

const ArrowBtns = ({
  prev,
  next,
  allowPrev,
  allowNext,
  noOfQuestions,
  noOfTries,
}) => {
  return (
    <div className="w-full lg:px-28 absolute bottom-0 left-0 pb-16 md:pb-28">
      <div className="container">
        <div className="flex justify-between items-center">
          {allowPrev ? (
            <button>
              <div className="nav-btn-container p-3 lg:p-4 bg-blue-800 rounded-full text-white">
                <TiArrowLeftThick
                  className="nav-btn text-white text-[30px] lg:text-[40px] cursor-pointer"
                  onClick={prev}
                />
              </div>
            </button>
          ) : (
            <button>
              <div className="nav-btn-container p-3 lg:p-4 bg-gray-300 rounded-full text-white">
                <TiArrowLeftThick className="nav-btn text-white text-[30px] lg:text-[40px]" />
              </div>
            </button>
          )}
          {allowNext ? (
            <button>
              <div className="nav-btn-container p-3 lg:p-4 bg-blue-800 rounded-full text-white">
                <TiArrowRightThick
                  className="nav-btn text-white text-[30px] lg:text-[40px] cursor-pointer"
                  onClick={next}
                />
              </div>
            </button>
          ) : (
            <Link to="/result">
              <div className="nav-btn-container p-3 lg:p-5 bg-blue-400 rounded-full text-white">
                <BsCheckLg className="nav-btn text-white text-[30px] lg:text-[30px] cursor-pointer" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArrowBtns;
