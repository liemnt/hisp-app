import data from "../data/family_dump_data.json";

const getOptionsFromDE = deId => {
  const optionIds = data.metaData.dimensions[deId];
  return optionIds.map(optionId => data.metaData.items[optionId]);
};

const getDataValueIndex = deId => {
  return data.headers.findIndex(header => header.name === deId);
};

const countByOptionsFromDE = deId => {
  const options = getOptionsFromDE(deId);
  const dataValueIndex = getDataValueIndex(deId);
  return options.map(({ code }) => {
    return data.rows.reduce((result, dataValues) => {
      const dataValueCode = dataValues[dataValueIndex];
      if (dataValueCode === code) result += 1;
      return result;
    }, 0);
  });
};

const sumBySingleDeId = deId => {
  const dataValueIndex = getDataValueIndex(deId);
  return data.rows.reduce((total, value) => {
    total += +value[dataValueIndex];
    return total;
  }, 0);
};

const sum = dataValues =>
  dataValues.reduce((total, dataValue) => (total += +dataValue), 0);

const deepSum = array => {
  if (!Array.isArray(array)) {
    return array;
  }
  return sum(array.map(subArray => deepSum(subArray)));
};

const sumByDEs = deIds => {
  return deIds.map(deId => {
    if (Array.isArray(deId)) {
      return sumByDEs(deId);
    }
    return sumBySingleDeId(deId);
  });
};

const sumDumpByDE = (deIds, [min, max]) => {
  return deIds.map(() => {
    return data.rows.reduce(total => {
      total += Math.floor(Math.random() * (max - min + 1) + min);
      return total;
    }, 0);
  });
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

export {
  sumByDEs,
  sumDumpByDE,
  getOptionsFromDE,
  countByOptionsFromDE,
  sum,
  sumByLevel
};
