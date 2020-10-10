const sum = dataValues =>
  dataValues.reduce((total, dataValue) => (total += +dataValue), 0);

const deepSum = array => {
  if (!Array.isArray(array)) {
    return array;
  }
  return sum(array.map(subArray => deepSum(subArray)));
};

const sumByLevel = level => {
  const sumSubArray = (array, fromLevel = 0) => {
    const nextLevel = fromLevel + 1;
    if (fromLevel === level) {
      return deepSum(array);
    }
    return array.map(subArray => sumSubArray(subArray, nextLevel));
  };
  return sumSubArray;
};

const sumDumpByDE = data => (deIds, [min, max]) => {
  return deIds.map(() => {
    return data.rows.reduce(total => {
      total += Math.floor(Math.random() * (max - min + 1) + min);
      return total;
    }, 0);
  });
};

export { sumByLevel, sum, deepSum, sumDumpByDE };
