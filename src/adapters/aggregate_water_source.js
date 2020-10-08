import React from "react";
import { countByOptionsFromDE, getOptionsFromDE } from "./utils";

const waterSourceDEId = "p2P8g0MnDBK";

const options = getOptionsFromDE(waterSourceDEId);

const waterSourceAggregatedData = countByOptionsFromDE(waterSourceDEId);

const labels = options.map(({ name }) => name);

export { waterSourceAggregatedData, labels };
