import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import Home from './src/screens/containers/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home>
        <Text>Header</Text>
        <Text>Buscador</Text>
        <Text>Categoria</Text>
        <Text>Sugerencias</Text>
      </Home>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 90,
  },
});
