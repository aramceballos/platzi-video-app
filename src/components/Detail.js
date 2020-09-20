import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { connect } from 'react-redux';

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

const Details = ({ selectedMovie }) => {
  return (
    <>
      <View style={styles.top}>
        <Text style={styles.title}>{selectedMovie.title}</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.details}>
          <Image
            style={styles.cover}
            source={{ uri: selectedMovie.medium_cover_image }}
          />
          <Text style={styles.description}>
            {selectedMovie.description_full}
          </Text>
        </View>
      </View>
      <View style={styles.trailer}>
        <WebView source={{ html: makeHTML(selectedMovie.yt_trailer_code) }} />
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie,
});

export default connect(mapStateToProps)(Details);

const styles = StyleSheet.create({
  container: {},
  trailer: {
    height: 200,
    marginBottom: 20,
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
