import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { BsQuestionLg } from "react-icons/bs";

const Header = () => {
  return (
    <div className="py-5 fixed bg-white shadow-lg w-full rounded-b-2xl">
      <div className="container flex justify-between items-center">
        <button>
          <Link to="/">
            <img src={logo} alt="logo" className="w-20 md:w-24" />
          </Link>
        </button>
        <div></div>
        <Link to="/test">
          <div className="p-4 md:p-5 bg-blue-800 rounded-full">
            <BsQuestionLg className="text-white" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
