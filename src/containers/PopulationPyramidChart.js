import React, { useRef, useEffect } from "react";
import Chart from "chart.js";
import {
  labels,
  maleAggregatedData,
  femaleAggregatedData
} from "../adapters/aggregate_population";

const barChartData = {
  labels: labels.reverse(),
  datasets: [
    {
      barPercentage: 1,
      label: "Male",
      stack: "Stack 0",
      backgroundColor: "#3349B1",
      data: maleAggregatedData.reverse().map(k => -k)
    },
    {
      barPercentage: 1,
      label: "Female",
      stack: "Stack 0",
      backgroundColor: "#E46DCB",
      data: femaleAggregatedData.reverse()
    }
  ]
};

const PopulationPyramidChart = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const ctx = canvasRef && canvasRef.current;
    const ctx2d = ctx && ctx.getContext("2d");
    if (ctx2d) {
      new Chart(ctx2d, {
        type: "horizontalBar",
        data: barChartData,
        options: {
          title: {
            position: "bottom",
            fontSize: 18,
            display: true,
            text: "Population Pyramid"
          },
          tooltips: {
            intersect: false,
            callbacks: {
              label: c => {
                const value = Number(c.value);
                const positiveOnly = value < 0 ? -value : value;
                let retStr = "";
                if (c.datasetIndex === 0) {
                  retStr += `Male: ${positiveOnly.toString()}`;
                } else {
                  retStr += `Female: ${positiveOnly.toString()}`;
                }
                return retStr;
              }
            }
          },
          responsive: true,
          legend: {
            position: "bottom"
          },
          scales: {
            xAxes: [
              {
                stacked: false,
                ticks: {
                  beginAtZero: true,
                  callback: v => {
                    return v < 0 ? -v : v;
                  }
                }
              }
            ],
            yAxes: [
              {
                stacked: true,
                ticks: {
                  beginAtZero: true
                },
                position: "left"
              }
            ]
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

export default PopulationPyramidChart;
