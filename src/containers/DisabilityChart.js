import React from "react";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";

import {
  aggregatedDisabilityData,
  labels
} from "../adapters/aggregate_disability";

function DisabilityChart(props) {
  return (
    <Bar
      data={{
        labels,
        datasets: [
          {
            label: "Some",
            data: aggregatedDisabilityData[0]
          },
          {
            label: "Lot",
            data: aggregatedDisabilityData[1]
          },
          {
            label: "Fully disable",
            data: aggregatedDisabilityData[2]
          }
        ]
      }}
      options={{
        scales: {
          xAxes: [
            {
              stacked: true
            }
          ]
        }
      }}
      legend={{
        display: true
      }}
    />
  );
}

DisabilityChart.propTypes = {};
DisabilityChart.defaultProps = {};

export default DisabilityChart;
