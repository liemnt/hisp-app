import BarChart from "../components/BarChart";
import React from "react";
import {
  labels,
  waterSourceAggregatedData
} from "../adapters/aggregate_water_source";

function WaterSource(props) {
  return (
    <BarChart
      labels={labels}
      title="Family Drinking Water Source"
      data={waterSourceAggregatedData}
    />
  );
}

WaterSource.propTypes = {};
WaterSource.defaultProps = {};

export default WaterSource;
