import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Register from './src/componants/Register'
import Login from './src/componants/Login'
import ForgotPassword from './src/componants/ForgotPassword'
const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <Register/> */}
      {/* <Login/> */}
      <ForgotPassword/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})