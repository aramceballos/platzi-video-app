import React from 'react';
import { StyleSheet, View } from 'react-native';

const Layout = ({ video, loader }) => {
  return (
    <View style={styles.container}>
      <View style={styles.video}>{video}</View>
      <View style={styles.overlay}>{loader}</View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%',
  },
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
});
