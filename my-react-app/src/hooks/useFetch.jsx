import { useState, useEffect, useRef } from "react";
import { AUTO_REFRESH_API } from "../constants";
import { customFetch } from "../utils/customFetch";

const useFetch = (
  { method = "GET", url = "", data = null, headers = {}, ...config },
  dependencies = [],
  autoRefresh = false
) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const timerRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await customFetch({ method, url, data, headers, ...config });
        setResponse(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    if (autoRefresh) {
      timerRef.current = setInterval(fetchData, AUTO_REFRESH_API);
    }
    return () => clearInterval(timerRef.current);
  }, [url, ...dependencies]);

  return { response, error, loading };
};

export default useFetch;
