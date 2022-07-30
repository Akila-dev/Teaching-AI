import React from "react";
import { BarChart, LineChart, Navbar, PieChart } from "../components";

const Result = () => {
  return (
    <>
      <Navbar position={"sticky"} />
      <div className="container w-full">
        <div className="py-4 lg:py-7 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-7">
          <div className="col-span-1">
            <BarChart />
          </div>
          <div className="col-span-1 grid md:grid-cols-3 lg:grid-cols-1 grid-cols-1 gap-3">
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
      </div>
    </>
  );
};

export default Result;
