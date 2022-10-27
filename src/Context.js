
// function to handle all api calls
const api = (letter, query, page, plot) => {

  const url = `http://www.omdbapi.com/?${letter}=${query}&page=${page}&plot=${plot}&apikey=dc298d6`;
  const results = fetch(url)

  return (results);
};

// function to handle movie search
export async function getSearchedMovies(query) {
  const results = await api('s', query);
  const response = await results.json();

  if (results.status === 200) {
    return response
  } else {
    throw { message: results.statusText , status: results.status };
  }
};

// function to get single movie, many details
export async function getMovieDetails(id) {
  const results = await api('i', id, null, 'full');
  const response = await results.json();

  if (results.status === 200) {
    return response
  } else {
    throw { message: results.statusText , status: results.status };
  }
}
