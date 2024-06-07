import { Dispatch, createContext } from "react";

interface MovieType {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  type: string;
  duration: string;
  youtubeString: string;
  isOpen: boolean;
}
interface MovieAction {
  type: string;
  payload: MovieType;
}

export const initialMovieInfo = {
  id: "",
  title: "",
  description: "",
  videoUrl: "",
  thumbnailUrl: "",
  genre: "",
  type: "",
  duration: "",
  youtubeString: "",
  isOpen: false,
};

export const movieReducers = (state: MovieType, action: MovieAction) => {
  switch (action.type) {
    case "UPDATE_MOVIE_INFO":
      return {
        ...state,
        ...action.payload,
        isOpen: true,
      };
    case "CLOSE":
      return {
        ...state,
        ...action.payload,
        isOpen: false,
      };

    default:
      return state;
  }
};

export const MovieInfoContext = createContext<MovieType>(initialMovieInfo);
export const MovieDispatchContext = createContext<Dispatch<MovieAction>>(
  () => undefined
);
