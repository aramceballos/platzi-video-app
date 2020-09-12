import React from 'react';
import { StatusBar, Platform } from 'react-native';

const Home = ({ children }) => {
  return (
    <>
      <StatusBar
        animated={true}
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
        networkActivityIndicatorVisible={true}
        showHideTransition="fade"
      />
      {children}
    </>
  );
};

export default Home;
