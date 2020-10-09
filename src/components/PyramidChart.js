import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { PropTypes } from "prop-types";

const PyramidChart = ({ groupLabels, labels, data, title }) => {
  const barChartData = {
    labels,
    datasets: [
      {
        barPercentage: 1,
        label: groupLabels[0],
        stack: "Stack 0",
        backgroundColor: "#3349B1",
        data: data[0].map(k => -k)
      },
      {
        barPercentage: 1,
        label: groupLabels[1],
        stack: "Stack 0",
        backgroundColor: "#E46DCB",
        data: data[1]
      }
    ]
  };
  return (
    <HorizontalBar
      data={barChartData}
      options={{
        title: {
          position: "top",
          fontSize: 18,
          display: true,
          text: title
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
      }}
    />
  );
};

PyramidChart.propTypes = {
  groupLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  labels: PropTypes.array.isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  title: PropTypes.string
};

PyramidChart.defaultPropTypes = {
  title: ""
};

export default PyramidChart;
