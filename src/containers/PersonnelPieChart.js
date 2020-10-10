import React from "react";
import PieChart from "../components/PieChart";
import {
  calculatePersonnelAggregatedData,
  labels
} from "../adapters/aggregate_personnel";
import PropTypes from "prop-types";

const PersonnelPlacePieChart = ({ data }) => {
  const personnelAggregatedData = calculatePersonnelAggregatedData(data);
  return (
    <PieChart
      data={personnelAggregatedData}
      labels={labels}
      title="Delivery by personnel"
    />
  );
};

PersonnelPlacePieChart.propTypes = {
  data: PropTypes.object.isRequired
};

export default PersonnelPlacePieChart;
