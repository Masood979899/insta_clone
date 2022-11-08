import { View, Text, FlatList, InteractionManager } from 'react-native'
import React from 'react'
import Post from '../../components/Post'
import post from "../../data/posts.json"
const Home = () => {
  return (
    <View>
        <FlatList
        data={post}
        // key={post.id}
        renderItem={({item}) => (
          <Post data={item}
           key={item.id}
           />
        )}
        />
    </View>
  )   
}

export default Home