import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Home from './src/screens/Home';
import Header from './src/components/Header';
import ListOfSuggestions from './src/containers/ListOfSuggestions';
import Categories from './src/components/Categories';
// import Player from './src/components/Player';
import reducer from './src/reducers';

const store = createStore(reducer, {
  categories: [
    'Action',
    'Adventure',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Horror',
    'Musical',
  ],
});

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Header />
        <Home>
          {/* <Player /> */}
          <Categories />
          <ListOfSuggestions />
        </Home>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
