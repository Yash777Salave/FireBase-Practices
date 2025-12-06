import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { resetPassword } from '../services/auth';
import { useNavigation } from '@react-navigation/native';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const handleResetPassword = async () => {
    console.log('Im from handle reset function');
    if (!email) {
      Alert.alert('Error', 'Please Enter Email');
      return;
    }
    try {
      //   console.log('Im from try catch block -----------> ');
      await resetPassword(email);
      Alert.alert('Success!', 'Reset password mail has been sent');
      setEmail('');
      setTimeout(() => {
        navigation.navigate('Login');
      }, 250);
    } catch (error) {
      //   console.log('Im from catch block with error-----------> ', error.message);

      Alert.alert('Error!', error.message);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.resetPasswordContainer}>
        <Text style={styles.heading}>Forgot Password</Text>
        <TextInput
          placeholder="Email"
          style={styles.inputBox}
          onChangeText={setEmail}
          value={email}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleResetPassword}
        >
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#808080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetPasswordContainer: {
    borderWidth: 0.5,
    backgroundColor: '#ffff',
    padding: 10,
    width: '89%',
    borderRadius: 10,
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    color: 'red',
    marginBottom: 25,
    fontWeight: 'bold',
  },
  inputBox: {
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    backgroundColor: 'red',
    padding: 9,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffff',
    fontWeight: 'semibold',
    textAlign: 'center',
    fontSize: 18,
  },
});
