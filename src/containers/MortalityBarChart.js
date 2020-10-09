import BarChart from "../components/BarChart";
import React from "react";
import {
  aggregatedMortalityData,
  labels
} from "../adapters/aggregate_mortality";

function MortalityBarChart(props) {
  return (
    <BarChart
      labels={labels}
      title="Mortality Details"
      data={aggregatedMortalityData}
    />
  );
}

MortalityBarChart.propTypes = {};
MortalityBarChart.defaultProps = {};

export default MortalityBarChart;
