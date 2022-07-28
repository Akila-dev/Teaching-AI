import React from "react";
import logo from "../assets/logo.png";
import { BsQuestionLg } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="py-5 fixed bg-white shadow-lg w-full rounded-b-2xl">
      <div className="container flex justify-between items-center">
        <img src={logo} alt="logo" />
        <div className="p-5 bg-blue-800 rounded-full">
          <BsQuestionLg className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
