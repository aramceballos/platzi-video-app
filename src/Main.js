/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './stacks/Home';
import UserStack from './stacks/User';
import SearchStack from './stacks/Search';
import Login from './screens/Login';
import { connect } from 'react-redux';

const Tabs = createBottomTabNavigator();

const Main = ({ isLoggedIn }) => {
  return (
    <>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        networkActivityIndicatorVisible={true}
        showHideTransition="slide"
        backgroundColor="#fff"
      />
      <NavigationContainer>
        {isLoggedIn ? (
          <Tabs.Navigator
            tabBarOptions={{
              activeTintColor: '#0c0',
              showLabel: false,
            }}>
            <Tabs.Screen
              name="Home"
              component={HomeStack}
              options={{
                tabBarIcon: ({ color }) => (
                  <Image
                    source={require('./assets/home.png')}
                    style={{ width: 30, height: 30, tintColor: color }}
                  />
                ),
              }}
            />
            <Tabs.Screen
              name="Search"
              component={SearchStack}
              options={{
                tabBarIcon: ({ color }) => (
                  <Image
                    source={require('./assets/search.png')}
                    style={{ width: 30, height: 30, tintColor: color }}
                  />
                ),
              }}
            />
            <Tabs.Screen
              name="User"
              component={UserStack}
              options={{
                tabBarIcon: ({ color }) => (
                  <Image
                    source={require('./assets/user.png')}
                    style={{ width: 30, height: 30, tintColor: color }}
                  />
                ),
              }}
            />
          </Tabs.Navigator>
        ) : (
          <Login />
        )}
      </NavigationContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(Main);
