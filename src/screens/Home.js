import React from 'react';

import Categories from '../components/Categories';
import ListOfSuggestions from '../containers/ListOfSuggestions';

const Home = () => {
  return (
    <>
      <Categories />
      <ListOfSuggestions />
    </>
  );
};

export default Home;
