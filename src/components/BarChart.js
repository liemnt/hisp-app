import { Bar } from "react-chartjs-2";
import React from "react";

function BarChart({ data, title, labels }) {
  const options = {
    title: {
      position: "top",
      fontSize: 18,
      display: true,
      text: title
    },
    responsive: true
  };
  return (
    <Bar
      data={{
        labels,
        datasets: [
          {
            maxBarThickness: 45,
            backgroundColor: "#3349B1",
            data
          }
        ]
      }}
      options={options}
      legend={{
        display: false
      }}
    />
  );
}

BarChart.propTypes = {};
BarChart.defaultProps = {};

export default BarChart;
