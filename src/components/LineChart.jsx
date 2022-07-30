import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const LineChart = () => {
  return (
    <>
      {/* FOR SMALL SCREENS */}
      <div className="block md:hidden">
        <Bar
          data={{
            labels: ["Correct", "Wrong"],
            datasets: [
              {
                label: "%",
                data: [50, 50],
                backgroundColor: [
                  "rgba(30,64,175, 0.8)",
                  "rgba(100,100,100,0.1)",
                ],
              },
            ],
          }}
          height={120}
          options={{
            indexAxis: "y",
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: "Performance",
              },
            },
          }}
        />
      </div>

      <div className="hidden md:block lg:hidden">
        <Bar
          data={{
            labels: ["Correct", "Wrong"],
            datasets: [
              {
                label: "%",
                data: [50, 50],
                backgroundColor: [
                  "rgba(30,64,175, 0.8)",
                  "rgba(100,100,100,0.1)",
                ],
              },
            ],
          }}
          height={150}
          options={{
            indexAxis: "y",
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: "Performance",
              },
            },
          }}
        />
      </div>

      {/* FOR LARGE SCREENS */}
      <div className="hidden lg:block xl:hidden">
        <Bar
          data={{
            labels: ["Correct", "Wrong"],
            datasets: [
              {
                label: "%",
                data: [50, 50],
                backgroundColor: [
                  "rgba(30,64,175, 0.8)",
                  "rgba(100,100,100,0.1)",
                ],
              },
            ],
          }}
          height={80}
          options={{
            indexAxis: "y",
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: "Performance",
              },
            },
          }}
        />
      </div>

      {/* FOR EXTRA LARGE SCREENS */}
      <div className="hidden xl:block">
        <Bar
          data={{
            labels: ["Correct Answers", "Wrong Answers"],
            datasets: [
              {
                label: "%",
                data: [50, 50],
                backgroundColor: [
                  "rgba(30,64,175, 0.8)",
                  "rgba(100,100,100,0.1)",
                ],
              },
            ],
          }}
          height={50}
          options={{
            indexAxis: "y",
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: "Performance",
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default LineChart;
