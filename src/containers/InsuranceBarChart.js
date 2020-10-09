import BarChart from "../components/BarChart";
import React from "react";
import {
  insuranceAggregatedData,
  labels
} from "../adapters/aggregate_insurance";

function InsuranceBarChart(props) {
  return (
    <BarChart
      labels={labels}
      title="Insurance Details"
      data={insuranceAggregatedData}
    />
  );
}

InsuranceBarChart.propTypes = {};
InsuranceBarChart.defaultProps = {};

export default InsuranceBarChart;
