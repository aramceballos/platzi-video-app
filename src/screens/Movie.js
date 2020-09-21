/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import Player from '../components/Player';
import Detail from '../components/Detail';

const Movie = ({ navigation, route }) => {
  const { movie } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: movie.title });
  }, []);

  return (
    <>
      <Player />
      <Detail movie={movie} />
    </>
  );
};

export default Movie;
