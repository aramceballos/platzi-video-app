const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_SUGGESTIONS':
      return {
        ...state,
        suggestions: [...payload],
      };

    default:
      return state;
  }
};

export default reducer;
