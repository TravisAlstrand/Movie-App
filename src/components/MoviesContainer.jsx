import { useLoaderData } from "react-router-dom";
import { getInitialMovies } from "../Context";
import MovieCard from "./MovieCard";

const MoviesContainer = () => {

  const loaderData = useLoaderData();
  let movies = [];
  if (loaderData.Search) {
    movies = loaderData.Search;
  }
  
  return (
    <div className='flex flex-col justify-center w-9/12 m-auto'>
      { movies.length ? (
        movies.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />
        })) : (
          <MovieCard movie={loaderData} />
        )
      }
      <div className="flex justify-center my-4">
        <button className='px-6 py-2 m-1 rounded-xl bg-gray-300 text-black hover:bg-black hover:text-white border-black border-2'>Prev</button>
        <button className='px-6 py-2 m-1 rounded-xl bg-gray-300 text-black hover:bg-black hover:text-white border-black border-2'>Next</button>
      </div>
    </div>
  )
};

export default MoviesContainer;

export function loader() {
  return getInitialMovies();
}