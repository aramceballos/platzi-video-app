import React from 'react';
import { StyleSheet, View } from 'react-native';

const VerticalSeparator = () => {
  return <View style={styles.separator} />;
};

export default VerticalSeparator;

const styles = StyleSheet.create({
  separator: {
    height: 15,
  },
});
