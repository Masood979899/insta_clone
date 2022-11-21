import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Post from './src/components/Post'
import { CommentScreen, Home, Profile } from './src/Containers'
import EditProfileScreen from './src/Containers/EditProfileScreen'
const App = () => {


  return (
    <View style={styles.container}>
      {/* <Home
      /> */}
      {/* <CommentScreen/> */}
      {/* <Profile/> */}
      <EditProfileScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  })

export default App