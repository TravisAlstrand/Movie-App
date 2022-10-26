
const api = (query, letter) => {
  const url = `http://www.omdbapi.com/?${letter}=${query}&apikey=dc298d6`;

  const results = fetch(url)

  return (results);
};

// function to handle movie search
export async function handleGetInitialMovies() {
  const results = await api('batman', 's');
  const response = await results.json();

  if (results.status === 200) {
    return response
  } else {
    throw { message: 'Failed to fetch movies.', status: 500 };
  }
};