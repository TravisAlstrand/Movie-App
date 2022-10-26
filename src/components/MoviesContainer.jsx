import { useLoaderData } from "react-router-dom";
import { handleGetInitialMovies } from "../Context";
import MovieCard from "./MovieCard";

const MoviesContainer = () => {

  const loaderData = useLoaderData();
  let movies = [];
  if (loaderData.Search) {
    movies = loaderData.Search;
  }
  
  return (
    <div className='flex flex-wrap justify-between w-9/12 m-auto'>
      { movies.length ? (
        movies.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />
        })) : (
          <MovieCard movie={loaderData} />
        )
      }
    </div>
  )
};

export default MoviesContainer;

export function loader() {
  return handleGetInitialMovies();
}