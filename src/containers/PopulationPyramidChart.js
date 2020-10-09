import React from "react";
import {
  femaleAggregatedData,
  labels,
  maleAggregatedData
} from "../adapters/aggregate_population";
import PyramidChart from "../components/PyramidChart";

const PopulationPyramidChart = () => {
  return (
    <PyramidChart
      labels={labels}
      data={[maleAggregatedData, femaleAggregatedData]}
      groupLabels={["Male", "Female"]}
      title="Population Pyramid"
    />
  );
};

export default PopulationPyramidChart;
