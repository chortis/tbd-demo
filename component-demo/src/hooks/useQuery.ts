import { useEffect, useState } from "react";

export const useQuery = <TData>(id: number) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [data, setData] = useState<TData>();

  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.dev/api/people/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
      })
      .catch((e) => {
        setError(e instanceof Error ? e : new Error(e));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data,
    error,
    loading,
  };
};
