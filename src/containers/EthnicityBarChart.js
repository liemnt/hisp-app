import BarChart from "../components/BarChart";
import React from "react";
import {
  ethnicityAggregatedDumpData,
  labels
} from "../adapters/aggregate_ethnicity";

function EthnicityBarChart(props) {
  return (
    <BarChart
      labels={labels}
      title="Ethnicity Details"
      data={ethnicityAggregatedDumpData}
    />
  );
}

EthnicityBarChart.propTypes = {};
EthnicityBarChart.defaultProps = {};

export default EthnicityBarChart;
