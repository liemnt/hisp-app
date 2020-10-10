import React, { useEffect, useState } from "react";
import withLoading from "../hocs/withLoading";
import Layout from "../components/Layout";
import { getAggregatedData } from "../service/api";

function LayoutContainer(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await getAggregatedData();
        console.log("test data", data);
        setData(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  console.log("data ne ne ne", data);
  return withLoading(
    Layout,
    {
      isLoading: loading,
      errorMessage: error
    },
    {
      data
    }
  );
}

LayoutContainer.propTypes = {};
LayoutContainer.defaultProps = {};

export default LayoutContainer;
