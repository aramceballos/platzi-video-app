import React from 'react';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

import Home from '../screens/Home';
import Movie from '../screens/Movie';
import Header from '../components/Header';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#fafafa',
        },
        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
      }}>
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
