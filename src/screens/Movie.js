import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Player from '../components/Player';
import { deleteSelectedMovie } from '../actions';

const Movie = (props) => {
  return (
    <>
      <Player closeMovie={() => props.deleteSelectedMovie()} />
    </>
  );
};

const mapDispatchToProps = {
  deleteSelectedMovie,
};

export default connect(null, mapDispatchToProps)(Movie);

const styles = StyleSheet.create({});
