import React, { useState } from 'react';
import { StyleSheet, TextInput, Platform } from 'react-native';
import { connect } from 'react-redux';

import { setMoviesResult } from '../actions';

const Search = (props) => {
  const [text, setText] = useState('');

  const searchMovie = async (query) => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?sort_by=rating&query_term=${query}`,
      );

      const {
        data: { movies },
      } = await response.json();

      props.setMoviesResult(movies);
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

const mapDispatchToProps = {
  setMoviesResult,
};

export default connect(null, mapDispatchToProps)(Search);

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
