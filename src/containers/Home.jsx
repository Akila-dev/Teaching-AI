import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";

const Home = () => {
  return (
    <div id="home" className="h-screen w-full">
      <Navbar />
      <div className="flex w-full h-full justify-center items-center">
        {/* <button className="rounded-lg shadow-lg tracking-widest bg-blue-900 text-white text-2xl uppercase"> */}
        <Link
          to="/test"
          className="text-center rounded-lg shadow-lg tracking-widest bg-blue-800 text-white text-2xl uppercase py-3 w-2/3 md:1/2 lg:w-1/3"
        >
          Take Test
        </Link>
        {/* </button> */}
      </div>
    </div>
  );
};

export default Home;
