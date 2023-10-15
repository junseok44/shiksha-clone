import { TCafeMenus, Ttime } from "../@types/types";
import { cafeAndMenus } from "../utils/data";
import { fakeFetch } from "../utils/fetch";
import { useEffect, useState } from "react";

export const useMenus = () => {
  const [cafeWithMenus, setCafeWithMenus] = useState<TCafeMenus[]>([]);
  const [time, setTime] = useState<Ttime>("morning");
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fakeFetch<TCafeMenus[]>(cafeAndMenus, 1000)
      .then((res) => {
        setCafeWithMenus(res);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  return {
    cafeWithMenus,
    time,
    date,
    loading,
    error,
    setTime,
    setDate,
  };
};
