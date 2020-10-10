import React from "react";
import { Pie } from "react-chartjs-2";
import { COLORS } from "./styles";

const DeliveryPlaceChart = ({ data, labels, title }) => {
  const pieChartData = {
    labels,
    datasets: [
      {
        maxBarThickness: 45,
        data,
        backgroundColor: COLORS
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
        responsive: true
      }}
      legend={{
        position: "bottom"
      }}
    />
  );
};

export default DeliveryPlaceChart;
