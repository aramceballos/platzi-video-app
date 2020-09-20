import React from 'react';
import { StyleSheet, ActivityIndicator, View, Image } from 'react-native';

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
