import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  return (
    <div className='mt-4'>
      <Link to={`/movie/${props.movie.imdbID}`}> 
        <img className='w-40 m-2 rounded-xl shadow-md shadow-white hover:shadow-lg hover:shadow-white hover:opacity-80 hover:cursor-pointer' src={props.movie.Poster} alt="Movie Poster" />
      </Link>
      <p className='text-white text-center'>{props.movie.Title}: {props.movie.Year}</p>
    </div>
  )
};

export default MovieCard;