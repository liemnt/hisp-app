import data from "../data/family_dump_data.json";

const getAggregatedData = () => {
  return new Promise((rs, rj) => {
    setTimeout(() => {
      rs(data);
    }, 1000);
  });
};

export { getAggregatedData };
