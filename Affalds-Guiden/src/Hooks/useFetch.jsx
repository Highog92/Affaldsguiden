import { useEffect, useState } from "react";

// Taget fra tidligere opgave som Kasper har lavet

export const useFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [url]);

  return data;
};
