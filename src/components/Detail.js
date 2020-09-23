import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

const makeHTML = (id) => {
  return `
    <style>
      .video {
        position: relative;
        padding-bottom: 56.25%;
      }
      iframe {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
      }
    </style>
    <div class="video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  `;
};

const Details = ({ movie }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.details}>
          <Image
            style={styles.cover}
            source={{ uri: movie.medium_cover_image }}
          />
          <Text style={styles.description}>{movie.description_full}</Text>
        </View>
      </View>
      <View style={styles.trailer}>
        <WebView
          scrollEnabled={false}
          source={{ html: makeHTML(movie.yt_trailer_code) }}
        />
      </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trailer: {
    height: 200,
  },
  details: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  cover: {
    width: 125,
    height: 190,
  },
  title: {
    color: '#44546b',
    fontSize: 18,
    fontWeight: 'bold',
  },
  top: {
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    padding: 20,
  },
  bottom: {
    padding: 20,
    flex: 1,
  },
  description: {
    fontSize: 15,
    lineHeight: 22.5,
    color: '#4c4c4c',
    marginLeft: 10,
    flex: 1,
  },
});
