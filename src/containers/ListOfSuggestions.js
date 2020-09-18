import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import Empty from '../components/Empty';
import Separator from '../components/Separator';
import Suggestion from '../components/Suggestion';

const ListOfSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSuggestions();
  }, []);

  const getSuggestions = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://yts.mx/api/v2//movie_suggestions.json?movie_id=1',
      );

      const {
        data: { movies },
      } = await response.json();

      setSuggestions(movies);
      setLoading(false);
    } catch (error) {
      console.log('error getting suggestions', error);
      setLoading(false);
    }
  };

  const keyExtractor = (item) => item.id.toString();

  const renderEmpty = () =>
    !loading && suggestions.length < 1 ? (
      <Empty text="There are not suggestions" />
    ) : null;

  const separator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommendations for you</Text>
      {loading ? <ActivityIndicator size="large" color="red" /> : null}
      <FlatList
        data={suggestions}
        ItemSeparatorComponent={separator}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmpty}
        renderItem={({ item }) => <Suggestion {...item} />}
      />
    </View>
  );
};

export default ListOfSuggestions;

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
  separator: {
    height: 15,
    marginHorizontal: 0,
  },
});
