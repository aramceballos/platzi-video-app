import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import Home from './src/screens/Home';
import Header from './src/components/Header';
import SuggestionsList from './src/components/SuggestionsList';

const App = () => {
  return (
    <SafeAreaView>
      <Home>
        <Header />
        <Text>Search</Text>
        <Text>Categories</Text>
        <Text>Suggestions</Text>
        <SuggestionsList />
      </Home>
    </SafeAreaView>
  );
};

export default App;
