import React from 'react';
import { FlatList } from 'react-native';

import Layout from './Layout';
import Empty from './Empty';
import VerticalSeparator from './VerticalSeparator';
import Suggestion from './Suggestion';

const SuggestionsList = () => {
  const list = [
    {
      key: '1',
      title: 'Avengers',
      year: '2007',
      rating: '4 Stars',
      genre: 'Sci-Fi/Action',
    },
    {
      key: '2',
      title: 'Dr. Strange',
      year: '2016',
      rating: '4.5 Stars',
      genre: 'Sci-Fi/Action',
    },
    {
      key: '3',
      title: 'Godzilla: King of the Monsters',
      year: '2019',
      rating: '5 Stars',
      genre: 'Sci-Fi/Action',
    },
  ];

  const renderEmpty = () => <Empty text="There are not suggestions" />;

  const separator = () => <VerticalSeparator />;

  return (
    <Layout title="Recommendations for you">
      <FlatList
        data={list}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={separator}
        renderItem={({ item }) => <Suggestion {...item} />}
      />
    </Layout>
  );
};

export default SuggestionsList;
