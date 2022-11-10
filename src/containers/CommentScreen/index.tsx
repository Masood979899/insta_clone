import { View, Text, FlatList } from 'react-native'
import React from 'react'
import comments from '../../data/comments.json'
import Comments from '../../components/Comments'

const CommentScreen = () => {
  return (
    <View>
      <FlatList
      data={comments}
      renderItem={({ item }) => (
        <Comments
        data={item}
        />
        )}/>
    </View>
  )
}

export default CommentScreen