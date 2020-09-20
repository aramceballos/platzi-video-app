import React from 'react';

import Header from '../components/Header';
import Categories from '../components/Categories';
import ListOfSuggestions from '../containers/ListOfSuggestions';

const Home = () => {
  return (
    <>
      <Header />
      <Categories />
      <ListOfSuggestions />
    </>
  );
};

export default Home;
