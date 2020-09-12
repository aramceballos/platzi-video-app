import React from 'react';
import { FlatList } from 'react-native';

import Layout from './CategoriesListLayout';
import Empty from './Empty';
import Separator from './Separator';
import Category from './Category';

const CategoryList = ({ categories }) => {
  const keyExtractor = (item) => item.id.toString();

  const renderEmpty = () => <Empty text="There are not suggestions" />;

  const separator = () => <Separator horizontal={true} />;

  return (
    <Layout>
      <FlatList
        data={categories}
        horizontal={true}
        ItemSeparatorComponent={separator}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmpty}
        renderItem={({ item }) => <Category {...item} />}
        showsHorizontalScrollIndicator={false}
      />
    </Layout>
  );
};

export default CategoryList;
