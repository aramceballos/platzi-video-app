import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';

import Home from './src/screens/Home';
import Header from './src/components/Header';
import SuggestionsList from './src/components/SuggestionsList';
import { getSuggestions } from './src/utils/api';

const App = () => {
  const [suggestedMovies, setSuggestedMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const movies = await getSuggestions(1);

      setSuggestedMovies(movies);
    })();
  }, []);

  return (
    <SafeAreaView>
      <Home>
        <Header />
        <Text>Search</Text>
        <Text>Categories</Text>
        <Text>Suggestions</Text>
        <SuggestionsList movies={suggestedMovies} />
      </Home>
    </SafeAreaView>
  );
};

export default App;
