import BarChart from "../components/BarChart";
import React from "react";
import {
  labels,
  toiletTypeAggregatedData
} from "../adapters/aggregate_toilet_type";

function ToiletTypeBarChart(props) {
  return (
    <BarChart
      labels={labels}
      title="Toilet Type"
      data={toiletTypeAggregatedData}
    />
  );
}

ToiletTypeBarChart.propTypes = {};
ToiletTypeBarChart.defaultProps = {};

export default ToiletTypeBarChart;
