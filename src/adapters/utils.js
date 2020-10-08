import data from "../data/family_dump_data.json";

const calculateTotalByDE = deIds => {
  return deIds.map(deId => {
    const index = data.headers.findIndex(header => header.name === deId);
    return data.rows.reduce((total, value) => {
      total += +value[index];
      return total;
    }, 0);
  });
};

const calculateDumpTotalByDE = (deIds, [min, max]) => {
  return deIds.map(() => {
    return data.rows.reduce((total) => {
      total += Math.floor(Math.random() * (max - min + 1) + min);
      return total;
    }, 0);
  });
};

export { calculateTotalByDE, calculateDumpTotalByDE };
