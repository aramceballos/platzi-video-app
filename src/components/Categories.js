import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  FlatList,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

const ListOfCategories = ({ categories }) => {
  const keyExtractor = (item) => item;

  const separator = () => <View style={styles.separator} />;

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/background.png')}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={categories}
        horizontal={true}
        ItemSeparatorComponent={separator}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </ImageBackground>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, null)(ListOfCategories);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  list: {
    paddingHorizontal: 10,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  category: {
    paddingHorizontal: 15,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  separator: {
    height: 0,
    marginHorizontal: 5,
  },
});
