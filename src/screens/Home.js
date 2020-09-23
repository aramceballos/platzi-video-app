import React from 'react';

import Categories from '../components/Categories';
import ListOfSuggestions from '../containers/ListOfSuggestions';

const Home = ({ navigation }) => {
  const onPress = (movie) => {
    navigation.navigate('Movie', { movie });
  };

  return (
    <>
      <Categories />
      <ListOfSuggestions onPress={onPress} />
    </>
  );
};

export default Home;
