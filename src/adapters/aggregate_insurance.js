import React from "react";
import { sumByDEs, sumDumpByDE } from "./utils";

const insuranceDEIds = [
  "bXy7dRTxSUN",
  "Pwttxh8qzbh",
  "qMEd4h2s2jA",
  "SyPLRSV1NCn",
  "Oov8I1ZmXo3",
  "C2zynun5YMh",
  "fqdxmeIjMGq"
];

const labels = [
  "SASS/SSO",
  "Military/Police Scheme",
  "National Health Insurance (NHI)",
  "Community-based Health Insurance",
  "Private Health Insurance",
  "Dont have",
  "Dont Know"
];

const insuranceAggregatedData = sumByDEs(insuranceDEIds);
const insuranceAggregatedDumpData = sumDumpByDE(insuranceDEIds, [0, 3]);

export { insuranceAggregatedData, insuranceAggregatedDumpData, labels };
