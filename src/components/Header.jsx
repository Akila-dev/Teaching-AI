import React from "react";
import logo from "../assets/logo.png";
import { BsQuestionLg } from "react-icons/bs";

const Header = ({ num, active_id }) => {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
  return (
    <div className="py-5 fixed bg-white shadow-lg w-full rounded-b-2xl">
      <div className="container flex justify-between items-center">
        <img src={logo} alt="logo" className="w-20 md:w-24" />
        <div className="p-4 md:p-5 bg-blue-800 rounded-full">
          <BsQuestionLg className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
