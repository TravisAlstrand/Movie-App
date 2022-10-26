import { useLoaderData } from "react-router-dom";
import { handleGetMovieDetails } from "../Context";

const MovieDetails = () => {
  const movie = useLoaderData();
  console.log(movie)

  return (
    <>
      <div className="flex flex-col mx-auto text-center w-9/12 text-white">
        <img className="mb-4" src={movie.Poster} alt={`Movie poster for ${movie.Title}`} />
        <h1>{movie.Title}</h1>
        <p>Rated: {movie.Rated}</p>
        <p>Release Date: {movie.Released}</p>
        <p>Director: {movie.Director}</p>
        <p>Writer(s): {movie.Writer}</p>
        <p>Genre(s): {movie.Genre}</p>
        <p>Actors: {movie.Actors}</p>
        <p>Awards: {movie.Awards}</p>
        <p>Box Office: {movie.BoxOffice}</p>
        <p>Runtime: {movie.Runtime}</p>
        <p>Ratings:</p>
        { movie.Ratings.length ? (
          movie.Ratings.map((rating, index) => {
            return <p key={index}>{rating.Source}: {rating.Value}</p>
          })) : (
            <p>(No Ratings Available)</p>
          )
        }
        <p>Plot: {movie.Plot}</p>
      </div>
    </>
  )
};

export default MovieDetails;

export function loader({params}) {
  return handleGetMovieDetails(params.id);
}