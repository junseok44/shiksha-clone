import { useEffect, useState } from "react";
import { fakeFetch } from "../utils/fetch";
import { getMenuReviewFromIds } from "../utils/data";
import { TMenuReview } from "../@types/types";

export const useMenu = (menuId: number) => {
  const [menuReview, setMenuReview] = useState<TMenuReview | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);

  const fetch = async () => {
    try {
      setError(null);
      setLoading(true);
      const data = await fakeFetch(getMenuReviewFromIds(menuId), 1000);
      setMenuReview(data);
      setLoading(false);
    } catch (err) {
      if (err instanceof Error) setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { menuReview, loading, error, setMenuReview };
};
