import React from "react";
import PieChart from "../components/PieChart";
import {
  calculateDeliveryPlaceAggregatedData,
  labels
} from "../adapters/aggregate_delivery_place";
import PropTypes from "prop-types";

const DeliveryPlacePieChart = ({ data }) => {
  const deliveryPlaceAggregatedData = calculateDeliveryPlaceAggregatedData(
    data
  );
  return (
    <PieChart
      data={deliveryPlaceAggregatedData}
      labels={labels}
      title="Place of delivery"
    />
  );
};

DeliveryPlacePieChart.propTypes = {
  data: PropTypes.object.isRequired
};

export default DeliveryPlacePieChart;
