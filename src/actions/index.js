export const setSuggestions = (payload) => ({
  type: 'SET_SUGGESTIONS',
  payload,
});

export const setSelectedMovie = (payload) => ({
  type: 'SET_SELECTED_MOVIE',
  payload,
});

export const deleteSelectedMovie = () => ({
  type: 'DELETE_MOVIE',
});
