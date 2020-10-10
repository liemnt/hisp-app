import BarChart from "../components/BarChart";
import React from "react";
import {
  calculateEthnicityAggregatedData,
  labels
} from "../adapters/aggregate_ethnicity";
import PropTypes from "prop-types";

function EthnicityBarChart({ data }) {
  const ethnicityAggregatedData = calculateEthnicityAggregatedData(data);
  return (
    <BarChart
      labels={labels}
      title="Ethnicity Details"
      data={ethnicityAggregatedData}
    />
  );
}

EthnicityBarChart.propTypes = {
  data: PropTypes.object.isRequired
};
EthnicityBarChart.defaultProps = {};

export default EthnicityBarChart;
