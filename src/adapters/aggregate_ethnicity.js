import bindDataContext from "./data_context";

const ethnicityDEIds = [
  "HJCjFyZe3fd",
  "ueeqalP1NnB",
  "NnsZ7Yq0ZMl",
  "AZULo0fgAPA",
  "jObBjI31SHJ"
];

const labels = [
  "Lao-Tai",
  "Mon-Khmer",
  "Hmong-Mien",
  "Chinese-Tibet",
  "Others"
];

const calculateEthnicityAggregatedData = data =>
  bindDataContext(data).sumByDEs(ethnicityDEIds);

export { calculateEthnicityAggregatedData, labels };
