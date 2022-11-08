import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Post from './src/components/Post'
import { Home } from './src/containers'
const App = () => {


  return (
    <View style={styles.container}>
      <Home
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  })

export default App