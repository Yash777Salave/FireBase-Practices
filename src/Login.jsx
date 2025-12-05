import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { loginUser } from './services/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Please fill all details');
      return;
    }
    try {
      const { emailVerified } = await loginUser(email, password);
      console.log('email verified = ------> ', emailVerified);
      if (emailVerified) {
        Alert.alert('Success', 'Login Successfull');
        setEmail('');
        setPassword('');
      } else {
        Alert.alert('Error', 'Email has not been verified');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
      console.log('Error', error.message);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.loginBox}>
        <Text style={styles.headingText}>Login</Text>
        <TextInput
          placeholder="Enter Email"
          style={styles.textInput}
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          placeholder="Enter Password"
          style={styles.textInput}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#808080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    borderWidth: 1,
    backgroundColor: '#ffff',
    padding: 20,
    width: '87%',
    borderRadius: 10,
  },
  headingText: {
    fontSize: 25,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 0.5,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  loginButton: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  loginText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'semibold',
    color: '#ffff',
  },
});
