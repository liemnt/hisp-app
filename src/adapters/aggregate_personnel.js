import { sumByDEs } from "./utils";

const labels = [
  "Self birth",
  "Delivery by Husband/Relatives",
  "Delivery by TBA/VHV",
  "Delivery by SBA",
  "Delivery by others"
];

const personnelDEIds = [
  "hRlVw3IeQ45",
  "c8E0s3lqCmD",
  "iYpP9mXDw1W",
  "FOTKm0DKO4Q",
  "YIg4eMjDYLg"
];

const personnelAggregatedData = sumByDEs(personnelDEIds);

export { labels, personnelAggregatedData };
