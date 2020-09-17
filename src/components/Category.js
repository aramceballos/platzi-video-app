import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Platform,
} from 'react-native';

const Category = ({ genres, medium_cover_image }) => {
  const onPress = () => {};

  return (
    <View onPress={onPress} style={styles.container}>
      <ImageBackground
        style={styles.wrapper}
        source={{ uri: medium_cover_image }}>
        <Text style={styles.text}>{genres[0]}</Text>
      </ImageBackground>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  text: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0, .75)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    ...Platform.select({
      ios: {
        textShadowRadius: 0,
      },
      android: {
        textShadowRadius: 1,
      },
    }),
  },
});
