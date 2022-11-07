import { View, Text, StyleSheet, SafeAreaView, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import Comments from './Comments';

const Post: any = ({ data }) => {
  // console.log(post.id)
  const avatar = "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"

  return (
    <>
      {/*header*/}

      <View style={styles.header}>
        <Image
          source={{ uri: data.user.image }}
          style={styles.img}
        />
        <Text style={styles.name}>{data?.user?.username}</Text>
        <TouchableOpacity style={{ marginLeft: "auto" }}>
          <Entypo name={"dots-three-horizontal"} size={16}
            style={styles.dots}
          />
        </TouchableOpacity>
      </View>

      {/*image*/}
      <Image
        source={{ uri: data.image }}
        style={styles.postimg}
        resizeMode={"contain"}
      />

      {/*footer*/}
      <View style={styles.footer}>
        <TouchableOpacity>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={"black"}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={"black"}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={"black"}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: "auto" }}>
          <Feather
            name="bookmark"
            size={24}
            style={{ marginLeft: 'auto' }}
            color={"black"}
          />
        </TouchableOpacity>
      </View>

    {/*likes */}

      <View style={styles.likes}>
        <Image
          source={{ uri: data.user.image }}
          style={styles.avatar}
        />
        <Image
          source={{ uri: avatar }}
          style={styles.avatar2}
        />
        <Image
          source={{ uri: avatar }}
          style={styles.avatar3}
        />
        <View>
          <Text>Liked by <Text style={styles.name}>{data.comments.username}</Text> and <Text style={styles.name}>{data.nofLikes} others </Text> </Text>
        </View>
      </View>
      
      <View style={styles.comment_area}>
        <Text><Text style={{ fontWeight: "600", marginLeft: "2.5%", }}>{data.user.username}</Text>
          <Text style={styles.caption}>  {data.description}</Text></Text>
        


      </View>
      <Comments/>
      <Text style={{ color: "grey", marginTop: "2%", padding: "2%" }}>13 November 2022</Text>

    </>
  )
}


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: "4%",
    paddingTop: "10%",
    alignItems: "center"
  },
  img: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  name: {
    color: 'black',
    fontSize: 15,
    marginLeft: "2%",
    fontWeight: "600"

  }, dots: {
    marginLeft: "auto"
  },
  postimg: {
    width: "100%",
    aspectRatio: 4 / 3
  },
  footer: {
    flexDirection: 'row',
    padding: "1.5%",
    alignItems: "center"
  },
  icon: {
    marginHorizontal: "0.5%"

  },
  icon1: {
    marginLeft: "auto"
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
    padding: "1.5%",

  }, avatar: {
    height: 20,
    width: 20,
    borderRadius: 15,
  },
  profavatar: {
    height: 35,
    width: 35,
    borderRadius: 15,
  },
  avatar2: {
    height: 20,
    width: 20,
    borderRadius: 15,
    right: 10
  }, avatar3: {
    height: 20,
    width: 20,
    borderRadius: 15,
    right: 20
  },
  caption: {
    fontSize: 15,
  },
  add_comment: {
    flexDirection: "row",
    alignItems: "center",
    padding: "1.5%",
    borderRadius: 15,
  },
  txt_input: {
    marginHorizontal: "2%"
  },
  comment_area: {
    padding: "2%",
  },
  
})

export default Post