import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../componants/Login';
import Register from '../componants/Register';
import ForgotPassword from '../componants/ForgotPassword';
import userCRUD from '../componants/userCRUD';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    // <Stack.Navigator initialRouteName="Login">
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="userCRUD"
        component={userCRUD}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
