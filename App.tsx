import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Post from './src/components/Post'
import data from "./src/data/post"
const App = () => {

console.log(data)

  return (
    <View style={styles.container}>
      <Post data={data}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  })

export default App