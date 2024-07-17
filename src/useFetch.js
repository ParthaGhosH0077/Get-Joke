import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getJoke = async () => {
    // setLoading(true);
    // setError(null);
    try {
      const response = await fetch(url);
      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading (true);
    getJoke();
  }, [url]);

  return { data, loading, error, getJoke };
};

export default useFetch;
