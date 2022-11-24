
import { View, Text, StyleSheet, Image, } from 'react-native'
import React from 'react'
import Buttons from './Buttons'
import user from '../data/user.json'

interface IProfHeader{
  name: string,
  image: string
}


const ProfileHeader = (name:IProfHeader,image:IProfHeader) => {
  
  console.log(name,image)
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
        source={{uri:image}}
        style={styles.image}
        />

        <View style={styles.txtArea}>
          <Text style={styles.number}>98</Text>
          <Text style={styles.title}>Posts</Text>
        </View>
        <View style={styles.txtArea}>
          <Text style={styles.number}>1998</Text>
          <Text style={styles.title}>Followers</Text>
        </View>
        <View style={styles.txtArea}>
          <Text style={styles.number}>998</Text>
          <Text style={styles.title}>Following</Text>
        </View>
      </View>
      <View>
        {name?
      <Text style={styles.username}>{name}</Text>
      :  
      <Text style={styles.username}>Vadim</Text>

}
      <Text style={styles.bio}>{user.bio}</Text>
      </View>
      <View style={{flexDirection:"row"}}>
      <Buttons 
      text='Edit Profile'

      />
      <Buttons
    text='Another Button'
/>
      </View>
      </View>
  )
}
const styles =  StyleSheet.create({
  container:{
// flex:1,
// padding:"5%"
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

export default ProfileHeader