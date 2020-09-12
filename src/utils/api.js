const BASE_URL = 'https://yts.mx/api/v2';

export const getSuggestions = async (id) => {
  const response = await fetch(
    `${BASE_URL}/movie_suggestions.json?movie_id=${id}`,
  );
  const {
    data: { movies },
  } = await response.json();

  return movies;
};

export const getMovies = async () => {
  const response = await fetch(`${BASE_URL}/list_movies.json`);
  const {
    data: { movies },
  } = await response.json();

  return movies;
};
