import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Suggestion = ({ title, year, rating, genres, medium_cover_image }) => {
  const onPress = () => {};

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.thumbnail} source={{ uri: medium_cover_image }} />
        <View style={styles.genreContainer}>
          <Text style={styles.genre}>{genres[0]}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.year}>{year}</Text>
        <Text style={styles.rating}>{rating} Stars</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Suggestion;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  genreContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  genre: {
    color: 'white',
    fontSize: 11,
  },
  thumbnail: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
  },
  infoContainer: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#44546b',
  },
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
