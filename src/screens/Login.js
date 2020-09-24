import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';

import { setLogged } from '../actions';

const Login = (props) => {
  const onPress = () => {
    props.setLogged(true);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.textButton}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = {
  setLogged,
};

export default connect(null, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    marginTop: 15,
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    width: 300,
    height: 50,
    backgroundColor: '#fefefe',
    borderRadius: 5,
    marginVertical: 7,
    fontSize: 16,
    padding: 10,
    shadowColor: '#ddd',
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#0b0',
    borderRadius: 5,
    tintColor: '#888',
    marginVertical: 7,
    fontSize: 16,
    padding: 10,
    shadowColor: '#0b0',
    shadowRadius: 4,
    shadowOpacity: 0.7,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
  },
});
