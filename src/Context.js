
const api = (query, letter) => {
  const url = `http://www.omdbapi.com/?${letter}=${query}&apikey=dc298d6`;

  const results = fetch(url)
    .then(res => res.json());

  return (results);
};

// function to handle movie search
export async function handleGetInitialMovies() {
  const response = api('batman', 's');
  
  if (response) {
    return response
  } else {
    throw { message: 'Failed to fetch movies.', status: 500 };
  }
};