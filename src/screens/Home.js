import React from 'react';
import { StyleSheet, View } from 'react-native';

import Categories from '../components/Categories';
import ListOfSuggestions from '../containers/ListOfSuggestions';
import Search from '../components/Search';

const Home = ({ navigation }) => {
  const onPress = (movie) => {
    navigation.navigate('Movie', { movie });
  };

  const onSubmit = (movie) => {
    navigation.navigate('Movie', { movie });
  };

  return (
    <View style={styles.container}>
      <Search onSubmit={onSubmit} />
      <Categories />
      <ListOfSuggestions onPress={onPress} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
