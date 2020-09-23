import React, { useState } from 'react';
import { StyleSheet, TextInput, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const [text, setText] = useState('');

  const navigation = useNavigation();

  const onSubmit = (movie) => {
    navigation.navigate('Movie', { movie });
  };

  const searchMovie = async (query) => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?limit=1&sort_by=rating&query_term=${query}`,
      );

      const {
        data: { movies },
      } = await response.json();

      onSubmit(movies[0]);
    } catch (error) {
      console.log('err getting movies', error);
    }
  };

  const handleSubmit = () => {
    searchMovie(text);
  };

  const handleChange = (textInput) => {
    setText(textInput);
  };

  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      keyboardAppearance="light"
      onChangeText={handleChange}
      onSubmitEditing={handleSubmit}
      placeholder="Search"
      placeholderTextColor="#555"
      style={[
        styles.searchInput,
        Platform.OS === 'ios' && styles.searchInputIOS,
      ]}
      underlineColorAndroid="transparent"
      value={text}
    />
  );
};

export default Search;

const styles = StyleSheet.create({
  searchInput: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
  searchInputIOS: {
    backgroundColor: '#ddd',
    width: 300,
    borderRadius: 10,
    padding: 8,
    borderColor: '#0000',
  },
});
