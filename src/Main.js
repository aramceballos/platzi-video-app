import React from 'react';
import { StatusBar, Platform, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import Home from './screens/Home';
import Movie from './screens/Movie';

const Main = ({ selectedMovie }) => {
  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
        networkActivityIndicatorVisible={true}
        showHideTransition="fade"
      />
      {selectedMovie ? <Movie /> : <Home />}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie,
});

export default connect(mapStateToProps)(Main);
