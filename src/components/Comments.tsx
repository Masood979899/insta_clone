import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import { IComment } from '../types/models'

interface ICommentProps{
  data:IComment
  includeDetail: boolean
}

const avatar="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg"

const Comments = ({data,includeDetail=false}:ICommentProps) => {

  const [isLiked, setIsLiked]= useState(false)

const toggleLike=()=>{
  setIsLiked(v=>!v)
}

  return (
    <>
    <View style={styles.root}>      
        <View style={styles.comment}>
         {includeDetail&&(<Image
         source={{uri:avatar}}
         style={styles.avatar}
         />)}
         
          <Text style={{flex:1} }><Text style={{ fontWeight: "600",color:"black" }}>{data.user.username}{"  "}</Text>
            <Text style={{alignItems:"center",color:"black"}}>{data.comment}</Text>
          </Text>
          <TouchableOpacity style={{ marginLeft:"auto"}}
          onPress={toggleLike}
          >
            <AntDesign name={isLiked?"heart":"hearto"} size={15} 
            color={isLiked?'#ED4956':"black"}
            style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        {includeDetail&&(<View style={styles.footer}>
        <Text style={styles.footertxt}>2d</Text>
        <Text style={styles.footertxt}>5 likes</Text>
        <Text style={styles.footertxt}>Reply</Text>
        </View>)}
        
        
   
    </View>
</>
)
}
const styles = StyleSheet.create({
  root:{
    // padding:"2%"
    marginHorizontal:"3%"
  },  
  icon: {
        marginHorizontal: "0.5%"
        
    
      },
      comment: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: "2.5%",
      },
      avatar:{
        width: "10%",
        aspectRatio:1,
        borderRadius:50,
        alignItems:"center",
        marginRight:"2%"
      },
      footer:{
        flexDirection:"row",
        alignItems:"center",
        paddingLeft: "14%",marginVertical:"1%"
        
      },
      footertxt: {
        color:"grey",
        fontSize:12,
        fontWeight:"bold",
        marginRight:"8%"
        }
})
export default Comments