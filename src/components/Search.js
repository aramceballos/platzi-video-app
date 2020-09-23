import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Platform,
  Dimensions,
  View,
  Image,
} from 'react-native';
import { connect } from 'react-redux';

import { setMoviesResult } from '../actions';

const screen = Dimensions.get('window');

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
    <View
      style={[
        styles.searchSection,
        Platform.OS === 'ios' && styles.searchSectionIOS,
      ]}>
      <Image
        source={require('../assets/search.png')}
        style={styles.searchIcon}
      />
      <TextInput
        autoCorrect={false}
        keyboardAppearance="light"
        onChangeText={handleChange}
        onSubmitEditing={handleSubmit}
        placeholder="Search"
        placeholderTextColor="#999"
        style={styles.searchInput}
        underlineColorAndroid="transparent"
        value={text}
      />
    </View>
  );
};

const mapDispatchToProps = {
  setMoviesResult,
};

export default connect(null, mapDispatchToProps)(Search);

const styles = StyleSheet.create({
  searchInput: {
    fontSize: 17,
    width: screen.width - 50,
  },
  searchSectionIOS: {
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 8,
    height: 37,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    height: 20,
    width: 20,
    tintColor: '#999',
    margin: 5,
  },
});
