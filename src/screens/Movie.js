import React from 'react';

import Player from '../components/Player';
import Detail from '../components/Detail';

const Movie = ({ route }) => {
  const { movie } = route.params;

  return (
    <>
      <Player />
      <Detail movie={movie} />
    </>
  );
};

export default Movie;
