"use client";

import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

export default function useMovieList() {
  const { data, isLoading, error } = useSWR("/api/movies", fetcher);
  return {
    data,
    isLoading,
    error,
  };
}
