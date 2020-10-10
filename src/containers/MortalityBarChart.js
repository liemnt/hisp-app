import BarChart from "../components/BarChart";
import React from "react";
import PropTypes from "prop-types";
import {
  calculateAggregatedMortalityData,
  labels
} from "../adapters/aggregate_mortality";

function MortalityBarChart({ data }) {
  const aggregatedMortalityData = calculateAggregatedMortalityData(data);
  return (
    <BarChart
      labels={labels}
      title="Mortality Details"
      data={aggregatedMortalityData}
    />
  );
}

MortalityBarChart.propTypes = {
  data: PropTypes.object.isRequired
};
MortalityBarChart.defaultProps = {};

export default MortalityBarChart;
