import MovieDetails from "./MovieDetails";

const MoviesContainer = (props) => {
  return (
    <div className='flex'>
      {props.movies.map((movie, index) => {
        return (
          <MovieDetails key={index} movie={movie} />
        )
      })}
    </div>
  )
};

export default MoviesContainer;