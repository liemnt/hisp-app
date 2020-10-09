import React from "react";
import PieChart from "../components/PieChart";
import {
  deliveryPlaceAggregatedData,
  labels
} from "../adapters/aggregate_delivery_place";

const DeliveryPlacePieChart = () => {
  return (
    <PieChart
      data={deliveryPlaceAggregatedData}
      labels={labels}
      title="Place of delivery"
    />
  );
};

export default DeliveryPlacePieChart;
