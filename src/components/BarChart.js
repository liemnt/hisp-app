import React, { useRef, useEffect } from "react";
import Chart from "chart.js";

const BarChart = ({ title, data, labels }) => {
  const barChartData = {
    labels,
    datasets: [
      {
        maxBarThickness: 45,
        backgroundColor: "#3349B1",
        data
      }
    ]
  };
  const canvasRef = useRef(null);
  useEffect(() => {
    const ctx = canvasRef && canvasRef.current;
    const ctx2d = ctx && ctx.getContext("2d");
    if (ctx2d) {
      new Chart(ctx2d, {
        type: "bar",
        data: barChartData,
        options: {
          title: {
            position: "top",
            fontSize: 18,
            display: true,
            text: title
          },
          responsive: true,
          legend: {
            display: false
          }
        }
      });
    }
  }, []);
  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default BarChart;
