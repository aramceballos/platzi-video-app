import React from 'react';

import Header from '../components/Header';
import Categories from '../components/Categories';
import ListOfSuggestions from '../containers/ListOfSuggestions';
import Search from '../components/Search';

const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <Categories />
      <ListOfSuggestions />
    </>
  );
};

export default Home;
