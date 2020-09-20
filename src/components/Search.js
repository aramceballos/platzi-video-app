import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Search = () => {
  const [text, setText] = useState('');

  const handleSubmit = (ev) => {
    console.log(ev);
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
      style={styles.searchInput}
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
});
