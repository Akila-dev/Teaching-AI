import React from "react";
import { Link } from "react-router-dom";
import { BarChart, LineChart, Navbar, PieChart } from "../components";

const Result = () => {
  return (
    <>
      <Navbar position={"sticky"} />
      <div className="container w-full">
        <div className="py-4 lg:py-7 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7">
          <div className="col-span-1">
            <BarChart />
          </div>
          <div className="col-span-1 grid md:grid-cols-3 lg:grid-cols-1 grid-cols-1 gap-5">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 flex justify-center">
                  <PieChart />
                </div>
                <div className="col-span-1 flex justify-center">
                  <PieChart />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <LineChart />
              <LineChart />
            </div>
          </div>
        </div>
        <div className="py-7 flex w-full justify-center items-center">
          <Link
            to="/test"
            className="text-center rounded-lg shadow-lg tracking-widest bg-blue-800 text-white text-2xl uppercase p-4 w-full md:1/2 lg:w-1/3 pulse-blue"
          >
            Take Another Test
          </Link>
        </div>
      </div>
    </>
  );
};

export default Result;
