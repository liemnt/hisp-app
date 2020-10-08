import BarChart from "../components/BarChart";
import React from "react";
import {
  labels,
  ethnicityAggregatedDumpData
} from "../adapters/aggregate_ethnicity";
import PropTypes from "prop-types";

function EthnicityChart(props) {
  return (
    <BarChart
      labels={labels}
      title="Ethnicity Details"
      data={ethnicityAggregatedDumpData}
    />
  );
}

EthnicityChart.propTypes = {};
EthnicityChart.defaultProps = {};

export default EthnicityChart;
