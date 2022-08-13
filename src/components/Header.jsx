import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoReloadOutline } from "react-icons/io5";

const Header = ({ exit, reload, to = "/test" }) => {
  return (
    <div className="py-5 fixed bg-white shadow-lg w-full rounded-b-2xl">
      <div className="container flex justify-between items-center">
        <Link to="/" onClick={exit}>
          <img src={logo} alt="logo" className="w-20 md:w-24" />
        </Link>
        <div></div>
        <Link to={to} onClick={reload}>
          <div className="p-3 md:p-4 bg-blue-800 rounded-full">
            <IoReloadOutline className="text-white font-black text-3xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
