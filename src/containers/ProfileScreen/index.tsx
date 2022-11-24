import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Buttons from '../../components/Buttons'
import user from '../../data/user.json'
import ProfileHeader from '../../components/ProfileHeader'
import FeedGridView from '../../components/FeedGridView'
import navigation from '../..'
import { useNavigation } from '@react-navigation/native'
const Profile = ({route}) => {
  
  const navigation =  useNavigation()
  const {name,image}=route.params;
  // console.log(name,image)
  navigation.setOptions({title:name})
  return (
    <View style={styles.container}>
      <FeedGridView
      data={user.posts}
      name={name}
      image={image}
      listHeaderComponent={ProfileHeader(name,image)}
      />


    </View>
  )
}


const styles =  StyleSheet.create({
  container:{
flex:1,
padding:"5%",
paddingTop:"10%"
  },
  header:{
    flexDirection:"row",
    // padding:"2%",
    alignItems:"center",
    justifyContent:"space-between",
  },
  image:{
    width:"30%",
    aspectRatio:1,
    borderRadius:50
  },
  number:{
    color:"black",
    fontWeight:"bold",
    fontSize:16
  },
  title:{
    color:"black",
    fontSize:16,
    fontWeight:"300"
  },
  txtArea: {
    alignItems:"center"
  },
  username:{
    color:"black",
    fontWeight:"bold",
    fontSize:15
  },bio:{
  color:"black",
  },
  btn_header:{
    marginVertical:"4%",
    flexDirection:"row",
    alignItems:"center",
    // justifyContent:"space-evenly"
  },
  btn:{
    backgroundColor:"white",
    padding:"3%",
    borderRadius:16,
    elevation:20,
    marginHorizontal:"10%"
  }



})

export default Profile