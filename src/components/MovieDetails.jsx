const MovieDetails = (props) => {
  return (
    <div className=''>
      <img className='w-32 m-2' src={props.movie.Poster} alt="Movie Poster" />
    </div>
  )
};

export default MovieDetails;