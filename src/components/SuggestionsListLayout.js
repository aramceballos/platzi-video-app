import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommendations for you</Text>
      {children}
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginLeft: 8,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
