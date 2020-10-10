import BarChart from "../components/BarChart";
import React from "react";
import {
  calculateWaterSourceAggregatedData,
  getOptionLabels
} from "../adapters/aggregate_water_source";
import PropTypes from "prop-types";

function WaterSource({ data }) {
  const labels = getOptionLabels(data);
  const waterSourceAggregatedData = calculateWaterSourceAggregatedData(data);
  return (
    <BarChart
      labels={labels}
      title="Family Drinking Water Source"
      data={waterSourceAggregatedData}
    />
  );
}

WaterSource.propTypes = {
  data: PropTypes.object.isRequired
};
WaterSource.defaultProps = {};

export default WaterSource;
