import React from "react";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";

import {
  calculateAggregatedDisabilityData,
  labels
} from "../adapters/aggregate_disability";
import { COLORS } from "../components/styles";

function DisabilityChart({ data }) {
  const aggregatedDisabilityData = calculateAggregatedDisabilityData(data);
  return (
    <Bar
      data={{
        labels,
        datasets: [
          {
            label: "Some",
            data: aggregatedDisabilityData[0],
            backgroundColor: COLORS[0],
            stack: "stack 0"
            // backgroundColor: COLORS
          },
          {
            label: "Lot",
            data: aggregatedDisabilityData[1],
            backgroundColor: COLORS[1],
            stack: "stack 0"
            // backgroundColors: COLORS
          },
          {
            label: "Fully disable",
            data: aggregatedDisabilityData[2],
            backgroundColor: COLORS[2],
            stack: "stack 0"
            // backgroundColors: COLORS
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
        position: "bottom"
      }}
    />
  );
}

DisabilityChart.propTypes = {
  data: PropTypes.object.isRequired
};
DisabilityChart.defaultProps = {};

export default DisabilityChart;
