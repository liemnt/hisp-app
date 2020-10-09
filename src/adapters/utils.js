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

const sumByDEs = deIds => {
  return deIds.map(deId => {
    if (Array.isArray(deId)) {
      return sumByDEs(deId).reduce((result, dataValue) => {
        result += dataValue;
        return result;
      }, 0);
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

export { sumByDEs, sumDumpByDE, getOptionsFromDE, countByOptionsFromDE };
