import { useLoaderData } from "react-router-dom";
import { handleGetInitialMovies } from "../Context";
import MovieCard from "./MovieCard";

const MoviesContainer = () => {

  const loaderData = useLoaderData();
  console.log(loaderData)
  const movies = loaderData.Search;
  console.log(movies)

  return (
    <div className='flex flex-wrap justify-between w-9/12 m-auto'>
      {
        movies.map((movie, index) => {
          <MovieCard key={index} movie={movie} />
        })
      }
    </div>
  )
};

export default MoviesContainer;

export function loader() {
  return handleGetInitialMovies();
}