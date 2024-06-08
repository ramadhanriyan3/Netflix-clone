"use client";

import useSwr from "swr";
import { fetcher } from "../lib/fetcher";

const useFavorites = () => {
  const { data, error, isLoading, mutate } = useSwr("/api/favorites", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  return { data, isLoading, error, mutate };
};

export default useFavorites;
