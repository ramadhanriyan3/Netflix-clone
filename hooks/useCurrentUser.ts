"use client";

import useSwr from "swr";
import { fetcher } from "./../lib/fetcher";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSwr("/api/current", fetcher);

  return { data, isLoading, error, mutate };
};

export default useCurrentUser;
