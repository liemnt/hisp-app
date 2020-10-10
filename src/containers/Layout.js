import React, { useEffect, useState } from "react";
import withLoading from "../hocs/withLoading";
import Layout from "../components/Layout";
import { getAggregatedData } from "../service/api";

function LayoutContainer(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [year, setYear] = useState("all");

  const getDataFromApi = async () => {
    setLoading(true);
    try {
      const data = await getAggregatedData(year);
      setData(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataFromApi();
  }, [year]);
  return withLoading(
    Layout,
    {
      isLoading: loading,
      errorMessage: error
    },
    {
      data,
      year,
      setYear
    }
  );
}

LayoutContainer.propTypes = {};
LayoutContainer.defaultProps = {};

export default LayoutContainer;
