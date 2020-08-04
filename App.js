import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';

const App = () => {
  return (
    <View>
      <Home>
        <Header />
        <Text>Buscador</Text>
        <Text>Categoria</Text>
        <Text>Sugerencias</Text>
      </Home>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
