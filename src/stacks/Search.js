import React from 'react';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

import Search from '../screens/Search';
import Movie from '../screens/Movie';
import SearchComponent from '../components/Search';
import Header from '../components/Header';

const Stack = createStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerBackTitleVisible: false,
        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
      }}>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: () => <SearchComponent />,
        }}
      />
      <Stack.Screen
        name="MovieResult"
        component={Movie}
        options={{
          headerTitle: () => <Header />,
        }}
      />
    </Stack.Navigator>
  );
}

export default SearchStack;
