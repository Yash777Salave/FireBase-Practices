import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Register from './src/componants/Register';
import Login from './src/componants/Login';
import ForgotPassword from './src/componants/ForgotPassword';
import StackNavigation from './src/navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <StackNavigation />
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
