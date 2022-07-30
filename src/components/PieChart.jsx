import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const PieChart = () => {
  return (
    <Pie
      data={{
        labels: ["Correct", "Wrong"],
        datasets: [
          {
            label: "Student Performance",
            data: [60, 40],
            backgroundColor: ["rgba(30,64,175, 0.8)", "rgba(100,100,100,0.1)"],
          },
        ],
      }}
      height={180}
      options={{
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "SCORE: 60%",
          },
        },
      }}
    />
  );
};

export default PieChart;
