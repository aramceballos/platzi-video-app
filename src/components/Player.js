import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import Video from 'react-native-video';

const Player = () => {
  const [loading, setLoading] = useState(true);

  const onBuffer = ({ isBuffering }) => {
    setLoading(isBuffering);
  };

  const onLoad = (ev) => {
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.video}>
        <Video
          source={{
            uri:
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          style={styles.video}
          resizeMode="contain"
          onBuffer={onBuffer}
          onLoad={onLoad}
        />
      </View>
      <View style={styles.overlay}>
        {loading && <ActivityIndicator color="red" size="large" />}
      </View>
    </View>
  );
};

export default Player;

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
    justifyContent: 'center',
  },
});
