import { useEffect, useState } from "react";
export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  return { data, loading, error };
};

export const useFetcher = <T>(
  fetcher: () => Promise<T>,
  callback: (res: T) => any
) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetcher().then((res) => {
      callback(res);
      setLoading(false);
    });
  }, []);

  return { loading, error };
};
