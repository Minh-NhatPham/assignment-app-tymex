import { useState, useEffect, useRef } from "react";
import { customFetch } from "../utils/customFetch";

const useFetch = (
  { method = "GET", url = "", data = null, headers = {}, ...requestConfig },
  dependencies = [],
  config = {}
) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { shouldFetch = true } = config;

  useEffect(() => {
    if (!shouldFetch) {
      return;
    }
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await customFetch({ method, url, data, headers, ...requestConfig });
        setResponse(res);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, ...dependencies]);

  return { response, error, loading };
};

export default useFetch;
