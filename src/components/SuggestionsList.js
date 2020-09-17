import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

import Empty from './Empty';
import Separator from './Separator';
import Suggestion from './Suggestion';

const SuggestionsList = ({ movies }) => {
  const keyExtractor = (item) => item.id.toString();

  const renderEmpty = () => <Empty text="There are not suggestions" />;

  const separator = () => <Separator />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommendations for you</Text>
      <FlatList
        data={movies}
        ItemSeparatorComponent={separator}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmpty}
        renderItem={({ item }) => <Suggestion {...item} />}
      />
    </View>
  );
};

export default SuggestionsList;

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
