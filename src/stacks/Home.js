import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Movie from '../screens/Movie';
import Header from '../components/Header';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header />,
        }}
      />
      <Stack.Screen name="Movie" component={Movie} />
    </Stack.Navigator>
  );
};

export default HomeStack;
