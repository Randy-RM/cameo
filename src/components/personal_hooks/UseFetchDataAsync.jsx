import { useState, useEffect } from "react";

export let UseFetchDataAsync = (url, resultsNumber = null) => {
  let [data, setData] = useState(null);
  let [isPending, setIsPending] = useState(true);
  let [error, setError] = useState(null);
  let sampleDataList = [];

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return response.json();
        })
        .then((dataColected) => {
          if (resultsNumber != null) {
            for (let i = 0; i < resultsNumber; i++) {
              sampleDataList.push(dataColected.results[i]);
            }
            setData(sampleDataList);
          } else {
            setData(dataColected);
          }
          setIsPending(false);
          setError(null);
        })
        .catch((error) => {
          setIsPending(false);
          setError(error.message);
          setData(null);
        });
    }, 1800);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, isPending, error };
};
