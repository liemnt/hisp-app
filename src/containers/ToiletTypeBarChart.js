import BarChart from "../components/BarChart";
import React from "react";
import {
  calculateToiletTypeAggregatedData,
  getOptionLabels
} from "../adapters/aggregate_toilet_type";
import PropTypes from "prop-types";

function ToiletTypeBarChart({ data }) {
  const labels = getOptionLabels(data);
  const toiletTypeAggregatedData = calculateToiletTypeAggregatedData(data);

  return (
    <BarChart
      labels={labels}
      title="Toilet Type"
      data={toiletTypeAggregatedData}
    />
  );
}

ToiletTypeBarChart.propTypes = {
  data: PropTypes.object.isRequired
};
ToiletTypeBarChart.defaultProps = {};

export default ToiletTypeBarChart;
