import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const BarChart = () => {
  return (
    <>
      <div className="hidden lg:block">
        <Bar
          data={{
            labels: [
              "No 1",
              "No 2",
              "No 3",
              "No 4",
              "No 5",
              "No 6",
              "No 7",
              "No 8",
              "No 9",
              "No 10",
            ],
            datasets: [
              {
                label: "Student Performance",
                data: [10, 5, 5, 6, 4, 6, 3, 5, 6, 4],
                backgroundColor: "rgba(30,64,175, 0.8)",
              },
            ],
          }}
          height={430}
          width={600}
          options={{
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                enabled: false,
              },
            },
          }}
        />
      </div>
      <div className="lg:hidden">
        <Bar
          data={{
            labels: [
              "No 1",
              "No 2",
              "No 3",
              "No 4",
              "No 5",
              "No 6",
              "No 7",
              "No 8",
              "No 9",
              "No 10",
            ],
            datasets: [
              {
                label: "Student Performance",
                data: [10, 5, 5, 6, 4, 6, 3, 5, 6, 4],
                backgroundColor: "rgba(30,64,175, 0.8)",
              },
            ],
          }}
          height={350}
          width={600}
          options={{
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                enabled: false,
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default BarChart;
