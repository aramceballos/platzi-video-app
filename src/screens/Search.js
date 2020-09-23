import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Empty from '../components/Empty';

import MovieItem from '../components/MovieItem';

const Search = ({ moviesResult, navigation }) => {
  const onPress = (movie) => {
    navigation.navigate('MovieResult', { movie });
  };

  const keyExtractor = (item) => item.id.toString();
  const separator = () => <View style={styles.separator} />;
  const renderEmpty = () =>
    moviesResult === undefined || moviesResult.length < 1 ? (
      <Empty text="There are not results" />
    ) : null;

  return (
    <View style={styles.container}>
      <FlatList
        data={moviesResult}
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
  moviesResult: state.moviesResult,
});

export default connect(mapStateToProps)(Search);

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    marginTop: 8,
    flex: 1,
    marginHorizontal: 10,
  },
  separator: {
    height: 15,
    marginHorizontal: 0,
  },
});
