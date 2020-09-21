import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { setSelectedMovie } from '../actions';

const Search = (props) => {
  const [text, setText] = useState('');

  const searchMovie = async (query) => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?limit=1&sort_by=rating&query_term=${query}`,
      );

      const {
        data: { movies },
      } = await response.json();

      props.setSelectedMovie(movies[0]);
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
      onChangeText={handleChange}
      onSubmitEditing={handleSubmit}
      placeholder="Search"
      placeholderTextColor="#555"
      style={styles.searchInput}
      underlineColorAndroid="transparent"
      value={text}
    />
  );
};

const mapDispatchToProps = {
  setSelectedMovie,
};

export default connect(null, mapDispatchToProps)(Search);

const styles = StyleSheet.create({
  searchInput: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
});
