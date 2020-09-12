import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Layout = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
