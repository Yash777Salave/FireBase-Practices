import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { registerUser } from './services/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password != confirmPassword) {
      Alert.alert('Error', 'Password not matched');
      return;
    }
    try {
      await registerUser(email, password);
      Alert.alert('Success', 'Verification mail has been sent please check');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      Alert.alert('Error', error.message);
      console.log('Error', error.message);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.signInBox}>
        <Text style={styles.createAccountText}>Create Account</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808080',
  },
  signInBox: {
    borderWidth: 1,
    backgroundColor: '#ffff',
    padding: 28,
    width: '90%',
    borderRadius: 50,
  },
  createAccountText: {
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 8,
    textAlign: 'center',
    fontSize: 22,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#808080',
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  registerButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 10,
  },
  registerButtonText: {
    color: '#ffff',
    textAlign: 'center',
    fontWeight: 'semibold',
    fontSize: 18,
  },
});
