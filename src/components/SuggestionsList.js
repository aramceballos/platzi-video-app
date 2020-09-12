import React from 'react';
import { FlatList } from 'react-native';

import Layout from './Layout';
import Empty from './Empty';
import VerticalSeparator from './VerticalSeparator';
import Suggestion from './Suggestion';

const SuggestionsList = ({ movies }) => {
  const keyExtractor = (item) => item.id.toString();

  const renderEmpty = () => <Empty text="There are not suggestions" />;

  const separator = () => <VerticalSeparator />;

  return (
    <Layout title="Recommendations for you">
      <FlatList
        data={movies}
        ItemSeparatorComponent={separator}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmpty}
        renderItem={({ item }) => <Suggestion {...item} />}
      />
    </Layout>
  );
};

export default SuggestionsList;
