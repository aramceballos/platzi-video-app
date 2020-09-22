import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../screens/Search';

const Stack = createStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fafafa',
        },
      }}>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

export default SearchStack;
