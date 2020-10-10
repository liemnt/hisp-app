import bindDataContext from "./data_context";

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

const calculateInsuranceAggregatedData = data =>
  bindDataContext(data).sumByDEs(insuranceDEIds);

export { calculateInsuranceAggregatedData, labels };
