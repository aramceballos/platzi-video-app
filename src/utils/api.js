export const getSuggestions = async (id) => {
  const response = await fetch(
    `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`,
  );
  const {
    data: { movies },
  } = await response.json();

  return movies;
};
