import React from "react";
import { countByOptionsFromDE, getOptionsFromDE } from "./utils";

const toiletTypeDEId = "BDi5vJcbiMv";

const options = getOptionsFromDE(toiletTypeDEId);

const toiletTypeAggregatedData = countByOptionsFromDE(toiletTypeDEId);

const labels = options.map(({ name }) => name);

export { toiletTypeAggregatedData, labels };
