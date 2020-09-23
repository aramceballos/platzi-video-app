const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_SUGGESTIONS':
      return {
        ...state,
        suggestions: [...payload],
      };

    case 'SET_SELECTED_MOVIE':
      return {
        ...state,
        selectedMovie: { ...payload },
      };

    case 'DELETE_MOVIE':
      return {
        ...state,
        selectedMovie: null,
      };

    case 'SET_MOVIES_RESULT':
      return {
        ...state,
        moviesResult: payload,
      };

    default:
      return state;
  }
};

export default reducer;
