import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';

const Header = ({ children }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View style={styles.right}>{children}</View>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
});
