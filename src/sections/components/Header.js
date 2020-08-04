import React from 'react';
import { StyleSheet, SafeAreaView, Image, View } from 'react-native';

const Header = ({ children }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/logo.png')}
        />
        <View style={styles.right}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  right: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
});
