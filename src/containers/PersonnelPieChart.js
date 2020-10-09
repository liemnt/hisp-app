import React from "react";
import PieChart from "../components/PieChart";
import {
  labels,
  personnelAggregatedData
} from "../adapters/aggregate_personnel";

const PersonnelPlacePieChart = () => {
  return (
    <PieChart
      data={personnelAggregatedData}
      labels={labels}
      title="Delivery by personnel"
    />
  );
};

export default PersonnelPlacePieChart;
