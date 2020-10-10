const getOptionsFromDE = data => deId => {
  const optionIds = data.metaData.dimensions[deId];
  return optionIds.map(optionId => data.metaData.items[optionId]);
};

const getDataValueIndex = data => deId => {
  return data.headers.findIndex(header => header.name === deId);
};

const countByOptionsFromDE = data => deId => {
  const options = getOptionsFromDE(data)(deId);
  const dataValueIndex = getDataValueIndex(data)(deId);
  return options.map(({ code }) => {
    return data.rows.reduce((result, dataValues) => {
      const dataValueCode = dataValues[dataValueIndex];
      if (dataValueCode === code) result += 1;
      return result;
    }, 0);
  });
};

const sumBySingleDeId = data => deId => {
  const dataValueIndex = getDataValueIndex(data)(deId);
  return data.rows.reduce((total, value) => {
    total += +value[dataValueIndex];
    return total;
  }, 0);
};

const sumByDEs = data => deIds => {
  return deIds.map(deId => {
    if (Array.isArray(deId)) {
      return sumByDEs(data)(deId);
    }
    return sumBySingleDeId(data)(deId);
  });
};

const bindDataContext = data => ({
  sumByDEs: sumByDEs(data),
  getOptionsFromDE: getOptionsFromDE(data),
  countByOptionsFromDE: countByOptionsFromDE(data)
});

export default bindDataContext;
