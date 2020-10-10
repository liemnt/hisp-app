import BarChart from "../components/BarChart";
import React from "react";
import {
  calculateInsuranceAggregatedData,
  labels
} from "../adapters/aggregate_insurance";
import PropTypes from "prop-types";

function InsuranceBarChart({ data }) {
  const insuranceAggregatedData = calculateInsuranceAggregatedData(data);
  return (
    <BarChart
      labels={labels}
      title="Insurance Details"
      data={insuranceAggregatedData}
    />
  );
}

InsuranceBarChart.propTypes = {
  data: PropTypes.object.isRequired
};
InsuranceBarChart.defaultProps = {};

export default InsuranceBarChart;
