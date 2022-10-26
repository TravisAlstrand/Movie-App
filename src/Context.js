
const api = (letter, query, page, plot) => {

  const url = `http://www.omdbapi.com/?${letter}=${query}&page=${page}&plot=${plot}&apikey=dc298d6`;
  const results = fetch(url)

  return (results);
};

// function to handle movie search
export async function handleGetInitialMovies() {
  const results = await api('s', 'batman');
  const response = await results.json();

  if (results.status === 200) {
    return response
  } else {
    throw { message: results.statusText , status: results.status };
  }
};

export async function handleGetMovieDetails(id) {
  const results = await api('i', id, null, 'full');
  const response = await results.json();

  if (results.status === 200) {
    return response
  } else {
    throw { message: results.statusText , status: results.status };
  }
}