"use client";

import PrivateNavbar from "../../components/privatNavbar";
import Billboard from "../../components/Billboard";
import MovieList from "../../components/MovieList";
import useMovieList from "../../hooks/useMovieList";
import useFavorites from "../../hooks/useFavorites";
import { MovieInfoContext, MovieDispatchContext } from "@/context/context";
import { useReducer } from "react";
import { movieReducers, initialMovieInfo } from "@/context/context";
import ModalInfo from "@/components/modalInfo";

const Home = () => {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  console.log(movies);

  const [movieInfo, dispatch] = useReducer(movieReducers, initialMovieInfo);
  return (
    <MovieInfoContext.Provider value={movieInfo}>
      <MovieDispatchContext.Provider value={dispatch}>
        <div className="w-full bg-black">
          <PrivateNavbar />
          <Billboard />
          <ModalInfo />
          <div className="pb-40">
            <MovieList data={movies} title="Trending Now" />
            <MovieList data={favorites} title="My list" />
          </div>
        </div>
      </MovieDispatchContext.Provider>
    </MovieInfoContext.Provider>
  );
};

export default Home;
