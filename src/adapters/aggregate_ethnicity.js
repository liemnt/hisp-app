import { sumByDEs, sumDumpByDE } from "./utils";

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

const ethnicityAggregatedData = sumByDEs(ethnicityDEIds);
const ethnicityAggregatedDumpData = sumDumpByDE(ethnicityDEIds, [0, 3]);

export { ethnicityAggregatedData, ethnicityAggregatedDumpData, labels };
