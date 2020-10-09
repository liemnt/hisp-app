import React from "react";
import { Pie } from "react-chartjs-2";

const DeliveryPlaceChart = ({ data, labels, title }) => {
  const pieChartData = {
    labels,
    datasets: [
      {
        maxBarThickness: 45,
        data,
        backgroundColor: [
          "#4C73BE",
          "#DF8244",
          "#A5A5A5",
          "#F7C142",
          "#689BD0",
          "#7EAA55"
        ]
      }
    ]
  };
  return (
    <Pie
      data={pieChartData}
      options={{
        title: {
          position: "top",
          fontSize: 18,
          display: true,
          text: title
        },
        responsive: true,
        legend: {
          fullWidth: false,
          position: "bottom",
          maxWidth: 10
        }
      }}
    />
  );
};

export default DeliveryPlaceChart;
