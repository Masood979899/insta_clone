import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Post from './src/components/Post'
import { CommentScreen, Home } from './src/containers'
const App = () => {


  return (
    <View style={styles.container}>
      {/* <Home
      /> */}
      <CommentScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  })

export default App