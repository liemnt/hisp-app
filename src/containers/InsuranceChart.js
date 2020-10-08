import BarChart from "../components/BarChart";
import React from "react";
import {
  labels,
  insuranceAggregatedData
} from "../adapters/aggregate_insurance";
import PropTypes from "prop-types";

function InsuranceChart(props) {
  return (
    <BarChart
      labels={labels}
      title="Insurance Details"
      data={insuranceAggregatedData}
    />
  );
}

InsuranceChart.propTypes = {};
InsuranceChart.defaultProps = {};

export default InsuranceChart;
