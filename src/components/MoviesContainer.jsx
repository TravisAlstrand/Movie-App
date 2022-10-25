import MovieCard from "./MovieCard";

const MoviesContainer = (props) => {
  return (
    <div className='flex flex-wrap justify-between w-9/12 m-auto'>
      {props.movies.map((movie, index) => {
        return (
          <MovieCard key={index} movie={movie} />
        )
      })}
    </div>
  )
};

export default MoviesContainer;