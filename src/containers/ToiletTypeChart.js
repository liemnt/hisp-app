import BarChart from "../components/BarChart";
import React from "react";
import {
    labels,
    toiletTypeAggregatedData
} from "../adapters/aggregate_toilet_type";
import PropTypes from "prop-types";

function ToiletTypeChart(props) {
    return (
        <BarChart
            labels={labels}
            title="Toilet Type"
            data={toiletTypeAggregatedData}
        />
    );
}

ToiletTypeChart.propTypes = {};
ToiletTypeChart.defaultProps = {};

export default ToiletTypeChart;
