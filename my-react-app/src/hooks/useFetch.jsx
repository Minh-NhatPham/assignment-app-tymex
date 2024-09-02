import { useState, useEffect } from "react";
import { customFetch } from "../utils/customFetch";

const useFetch = ({
  method = "GET",
  url = "",
  data = null,
  headers = {},
  dependencies = [],
  ...config
}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await customFetch({ method, url, data, headers, ...config });
        setResponse(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [method, path, data, headers, ...dependencies]);

  return { response, error, loading };
};

export default useFetch;
