import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";

interface MovieListProps {
  data: Record<string, any>[];
  title: string;
}

const MovieList = ({ data, title }: MovieListProps) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 py-4 md:py-12 md:px-12 space-y-8 bg-black ">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold pb-4 md:pb-8">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie) => (
            <MovieCard data={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
