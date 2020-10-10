import bindDataContext from "./data_context";

const toiletTypeDEId = "BDi5vJcbiMv";

const calculateToiletTypeAggregatedData = data =>
  bindDataContext(data).countByOptionsFromDE(toiletTypeDEId);

const getOptionLabels = data =>
  bindDataContext(data)
    .getOptionsFromDE(toiletTypeDEId)
    .map(({ name }) => name);

export { calculateToiletTypeAggregatedData, getOptionLabels };
