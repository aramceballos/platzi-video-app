/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-bitwise */
import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  Pressable,
  Image,
} from 'react-native';
import Video from 'react-native-video';

const Player = ({ closeMovie }) => {
  const [player, setPlayer] = useState({});
  const [loading, setLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const [paused, setPaused] = useState(true);
  const [timeRaw, setTimeRaw] = useState(0);
  const [time, setTime] = useState('');
  const [durationRaw, setDurationRaw] = useState(0);
  const [duration, setDuration] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false);

  const timeParsed = (seconds) => {
    var hrs = ~~(seconds / 3600);
    var mins = ~~((seconds % 3600) / 60);
    var secs = ~~seconds % 60;

    var ret = '';

    if (hrs > 0) {
      ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }

    ret += '' + mins + ':' + (secs < 10 ? '0' : '');
    ret += '' + secs;
    return ret;
  };

  const onBuffer = ({ isBuffering }) => {
    setLoading(isBuffering);
  };

  const onLoad = ({ duration: durationVideo }) => {
    setLoading(false);
    setDurationRaw(durationVideo);
    setDuration(timeParsed(durationVideo));
  };

  const onPress = () => {
    setShowOverlay(!showOverlay);
  };

  const onProgress = ({ currentTime, seekableDuration }) => {
    setTimeRaw(currentTime / seekableDuration);
    setTime(timeParsed(currentTime));
  };

  const onSlidingComplete = (part) => {
    player.seek(part * durationRaw);
  };

  const onSlidingStart = () => {
    setPaused(true);
  };

  const playPause = () => {
    setPaused(!paused);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.video}>
        <Video
          fullscreen={isFullScreen}
          fullscreenAutorotate={false}
          fullscreenOrientation="landscape"
          ignoreSilentSwitch={'ignore'}
          muted={false}
          onBuffer={onBuffer}
          onFullscreenPlayerDidDismiss={toggleFullScreen}
          onLoad={onLoad}
          onProgress={onProgress}
          paused={paused}
          progressUpdateInterval={10}
          rate={1.0}
          ref={(ref) => {
            setPlayer(ref);
          }}
          resizeMode="contain"
          source={{
            uri:
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          }}
          style={styles.video}
          volume={1.0}
        />
      </View>
      <View style={[styles.overlay, showOverlay && styles.overlayDark]}>
        {showOverlay && (
          <Pressable
            hitSlop={{
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            }}
            onPress={closeMovie}
            style={{ position: 'absolute', top: 15, right: 15 }}>
            <Image
              style={{
                height: 15,
                width: 15,
                tintColor: '#fff',
              }}
              source={require('../assets/cancel.png')}
            />
          </Pressable>
        )}
        {loading && <ActivityIndicator color="red" size="large" />}

        {!loading && showOverlay && (
          <Pressable onPress={playPause}>
            <Text style={styles.playPause}>
              {paused ? (
                <Image
                  style={{ height: 65, width: 65, tintColor: '#fff' }}
                  source={require('../assets/play.png')}
                />
              ) : (
                <Image
                  style={{ height: 65, width: 65, tintColor: '#fff' }}
                  source={require('../assets/pause.png')}
                />
              )}
            </Text>
          </Pressable>
        )}

        <View style={styles.controlsContainer}>
          {showOverlay && (
            <>
              <View style={styles.firstRow}>
                <Text style={styles.time}>
                  {time ? time : '0:00'} / {duration ? duration : '0:00'}
                </Text>
                <Pressable
                  hitSlop={{
                    top: 10,
                    bottom: 10,
                    left: 10,
                    right: 10,
                  }}
                  onPress={toggleFullScreen}
                  style={styles.time}>
                  <Image
                    style={{ height: 20, width: 20, tintColor: '#fff' }}
                    source={require('../assets/fullscreen.png')}
                  />
                </Pressable>
              </View>
            </>
          )}

          <Slider
            style={{ height: 3, marginTop: 20 }}
            minimumTrackTintColor="#f00"
            maximumTrackTintColor="#aaaa"
            thumbTintColor={showOverlay ? '#f00' : '#f000'}
            value={timeRaw}
            onSlidingComplete={onSlidingComplete}
            onSlidingStart={onSlidingStart}
          />
        </View>
      </View>
    </Pressable>
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
    alignItems: 'center',
  },
  overlayDark: {
    backgroundColor: '#0007',
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    color: '#fff',
    marginHorizontal: 15,
    fontSize: 13,
  },
  playPause: {
    color: '#fff',
    fontSize: 20,
  },
});
