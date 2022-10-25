import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
  return (
    <div className='mt-4'>
      <Link to={`/movie/${movie.imdbID}`}> 
        <img className='w-40 m-2 mt-0 rounded-xl shadow-md shadow-white hover:shadow-lg hover:shadow-white hover:opacity-80 hover:cursor-pointer' src={movie.Poster} alt="Movie Poster" />
      </Link>
      <p className='text-white text-center'>{movie.Title}: {movie.Year}</p>
    </div>
  )
};

export default MovieCard;