import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";

const Home = () => {
  return (
    <>
      <Navbar position={"fixed"} />
      <div
        id="home"
        className="h-screen w-full container fixed bottom-0 left-0"
      >
        <div className="flex w-full h-full justify-center lg:items-center items-end pb-12 lg:pb-0">
          <Link
            to="/test"
            className="text-center rounded-lg shadow-lg tracking-widest bg-blue-800 text-white text-2xl uppercase py-3 w-full md:1/2 lg:w-1/3 pulse-blue"
          >
            Take Test
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
