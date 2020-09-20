import React from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';

import Categories from '../components/Categories';
import ListOfSuggestions from '../containers/ListOfSuggestions';
import Header from '../components/Header';

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
        networkActivityIndicatorVisible={true}
        showHideTransition="fade"
      />
      <Header />
      <Categories />
      <ListOfSuggestions />
    </SafeAreaView>
  );
};

export default Home;
