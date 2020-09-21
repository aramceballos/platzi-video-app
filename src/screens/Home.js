import React from 'react';

import Categories from '../components/Categories';
import ListOfSuggestions from '../containers/ListOfSuggestions';
import Search from '../components/Search';

const Home = ({ navigation }) => {
  const onPress = (movie) => {
    navigation.navigate('Movie', { movie });
  };

  const onSubmit = (movie) => {
    navigation.navigate('Movie', { movie });
  };

  return (
    <>
      <Search onSubmit={onSubmit} />
      <Categories />
      <ListOfSuggestions onPress={onPress} />
    </>
  );
};

export default Home;
