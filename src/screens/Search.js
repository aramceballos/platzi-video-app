import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Search = () => {
  return (
    <View style={styles.container}>
      <Text>Search results</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
