import React from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';

const Layout = ({ children }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/background.png')}>
      <Text style={styles.title}>Categories</Text>
      {children}
    </ImageBackground>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
