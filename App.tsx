import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Register from './src/Register'
import Login from './src/Login'
const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <Register/> */}
      <Login/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})