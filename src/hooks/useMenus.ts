import { useRefresh } from "@react-native-community/hooks";
import { TCafeMenus, Ttime } from "../@types/types";
import { cafeAndMenus } from "../utils/data";
import { fakeFetch } from "../utils/fetch";
import { useEffect, useState } from "react";

export const useMenus = () => {
  const [cafeWithMenus, setCafeWithMenus] = useState<TCafeMenus[]>([]);
  const [time, setTime] = useState<Ttime>("morning");
  const [date, setDate] = useState(new Date());
  const [error, setError] = useState<null | Error>(null);

  const fetchCafeMenus = async () => {
    try {
      setError(null);
      const data = await fakeFetch<TCafeMenus[]>(cafeAndMenus, 1000);
      setCafeWithMenus(data);
      return Promise.resolve();
    } catch (error) {
      setError(error);
      setCafeWithMenus([]);
      return Promise.resolve();
    }
  };
  const { isRefreshing: loading, onRefresh } = useRefresh(fetchCafeMenus);

  useEffect(() => {
    onRefresh();
  }, [date]);

  return {
    cafeWithMenus,
    time,
    date,
    loading,
    error,
    onRefresh,
    setTime,
    setDate,
  };
};
