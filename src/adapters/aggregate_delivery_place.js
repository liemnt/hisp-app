import React from "react";
import { sumByDEs } from "./utils";

const insuranceDEIds = [
  "jxfyOMxkbIw",
  "y3h4wxW3w50",
  "ispm3X8fxSY",
  "U4fdHCMef6x",
  "SJ0Cvi4jeGy",
  [
    "DZqf1SBDDqv", // out side country
    "XM59B0Lw2Md", // health center
    "w19F9i9XORa" // other place
  ]
];

const labels = [
  "Delivery at home",
  "Delivery at District Hospital",
  "Delivery at Provincial Hospital",
  "Delivery at Central Hospital",
  "Delivery at Private Hospital",
  "Delivery in other place"
];

const deliveryPlaceAggregatedData = sumByDEs(insuranceDEIds);

export { deliveryPlaceAggregatedData, labels };
