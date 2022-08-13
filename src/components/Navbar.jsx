import React from "react";
import logo from "../assets/logo.png";
import { BsQuestionLg } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({ position }) => {
  return (
    <div
      className={`py-5 ${position} bg-white shadow-lg w-full rounded-b-2xl z-1000`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-20 md:w-24" />
        </Link>
        <div className="p-4 md:p-5 bg-blue-800 rounded-full">
          <BsQuestionLg className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
