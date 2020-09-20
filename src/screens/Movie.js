import React from 'react';
import { StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Player from '../components/Player';
import Detail from '../components/Detail';
import { deleteSelectedMovie } from '../actions';

const Movie = (props) => {
  const closeMovie = () => {
    props.deleteSelectedMovie();
  };
  return (
    <>
      <Header>
        <Pressable
          hitSlop={{
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
          }}
          onPress={closeMovie}>
          <Image
            style={styles.close}
            source={require('../assets/cancel.png')}
          />
        </Pressable>
      </Header>
      <ScrollView>
        <Player />
        <Detail />
      </ScrollView>
    </>
  );
};

const mapDispatchToProps = {
  deleteSelectedMovie,
};

export default connect(null, mapDispatchToProps)(Movie);

const styles = StyleSheet.create({
  close: {
    height: 15,
    width: 15,
    tintColor: '#000',
  },
});
