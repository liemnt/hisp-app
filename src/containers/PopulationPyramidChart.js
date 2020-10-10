import React from "react";
import PropTypes from "prop-types";
import {
  calculatePopulationAggregatedData,
  labels
} from "../adapters/aggregate_population";
import PyramidChart from "../components/PyramidChart";

const PopulationPyramidChart = ({ data }) => {
  const [
    maleAggregatedData,
    femaleAggregatedData
  ] = calculatePopulationAggregatedData(data);
  return (
    <PyramidChart
      labels={labels}
      data={[maleAggregatedData, femaleAggregatedData]}
      groupLabels={["Male", "Female"]}
      title="Population Pyramid"
    />
  );
};

PopulationPyramidChart.propTypes = {
  data: PropTypes.object.isRequired
};

export default PopulationPyramidChart;
