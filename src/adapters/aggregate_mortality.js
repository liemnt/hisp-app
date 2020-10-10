import { sum, sumByDEs } from "./utils";

const labels = [
  "Total Death",
  "Still Birth",
  "Death under 1 year",
  "Death 1-4 years",
  "Death 5-19 years",
  "Maternal death"
];

const mortalityDeIds = [
  "AB4m6KuUXF8",
  "m5y4aLbmIOO",
  "akAYIsCrRwV",
  "mPTyd0nP5Xx",
  "LmGX6VpLkIX"
];

const originalMortalityData = sumByDEs(mortalityDeIds);

const aggregatedMortalityData = [
  sum(originalMortalityData),
  ...originalMortalityData
];

export { aggregatedMortalityData, labels };
