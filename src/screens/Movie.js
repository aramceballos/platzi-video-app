import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Player from '../components/Player';
import Detail from '../components/Detail';
import { deleteSelectedMovie } from '../actions';

const Movie = (props) => {
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 400,
    }).start();
  }, []);

  const closeMovie = () => {
    props.deleteSelectedMovie();
  };

  return (
    <Animated.View
      style={{
        opacity: opacity,
      }}>
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
    </Animated.View>
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
