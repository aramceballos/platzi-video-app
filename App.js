import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';

import Home from './src/screens/Home';
import Header from './src/components/Header';
import SuggestionsList from './src/components/SuggestionsList';
import CategoriesList from './src/components/CategoriesList';
import { getSuggestions, getMovies } from './src/utils/api';
import Player from './src/components/Player';

const App = () => {
  const [suggestedMovies, setSuggestedMovies] = useState([]);
  const [categoriesMovies, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const movies = await getSuggestions(1);
      const categories = await getMovies();

      setSuggestedMovies(movies);
      setCategories(categories);
    })();
  }, []);

  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <Home>
          <Player />
          <Text>Search</Text>
          <CategoriesList categories={categoriesMovies} />
          <SuggestionsList movies={suggestedMovies} />
        </Home>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
