import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../screens/Search';
import SearchComponent from '../components/Search';

const Stack = createStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: () => <SearchComponent />,
        }}
      />
    </Stack.Navigator>
  );
}

export default SearchStack;
