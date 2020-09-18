import React from 'react';
import { StyleSheet, ImageBackground, FlatList, Text } from 'react-native';

import Empty from './Empty';
import Separator from './Separator';
import Category from './Category';

const CategoryList = ({ categories }) => {
  const keyExtractor = (item) => item.id.toString();

  const renderEmpty = () => <Empty text="There are not suggestions" />;

  const separator = () => <Separator horizontal={true} />;

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/background.png')}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        horizontal={true}
        ItemSeparatorComponent={separator}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmpty}
        renderItem={({ item }) => <Category {...item} />}
        showsHorizontalScrollIndicator={false}
        style={styles.list}
      />
    </ImageBackground>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
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
});
