import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';

import Empty from '../components/Empty';
import MovieItem from '../components/MovieItem';
import { setSuggestions } from '../actions';

const Category = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);
  const [categoryMovies, setCategoryMovies] = useState([]);

  const { category } = route.params;

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=${category.toLowerCase()}`,
      );

      const {
        data: { movies },
      } = await response.json();

      setCategoryMovies(movies);
      setLoading(false);
    } catch (error) {
      console.log('error getting category', error);
      setLoading(false);
    }
  };

  const onPress = (movie) => {
    navigation.navigate('Movie', { movie });
  };

  const keyExtractor = (item) => item.id.toString();
  const separator = () => <View style={styles.separator} />;
  const renderEmpty = () =>
    !loading && (categoryMovies === undefined || categoryMovies.length < 1) ? (
      <Empty text="There are not movies of this category" />
    ) : null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      {loading ? <ActivityIndicator size="large" color="red" /> : null}
      <FlatList
        data={categoryMovies}
        ItemSeparatorComponent={separator}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmpty}
        renderItem={({ item }) => (
          <MovieItem item={item} onPress={() => onPress(item)} />
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  suggestions: state.suggestions,
});

const mapDispatchToProps = {
  setSuggestions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    marginTop: 8,
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  separator: {
    height: 15,
    marginHorizontal: 0,
  },
});
