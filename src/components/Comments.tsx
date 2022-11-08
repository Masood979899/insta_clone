import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import { IComment } from '../types/models'

interface ICommentProps{
  data:IComment
}



const Comments = ({data}:ICommentProps) => {
  
  return (
    <>
    <View style={styles.root}>      
        <View style={styles.comment}>
          <Text style={{flex:1}}><Text style={{ fontWeight: "600" }}>{data.user.username}{"  "}</Text>
            <Text style={{alignItems:"center"}}>{data.comment}</Text>
          </Text>
          <TouchableOpacity style={{ marginLeft:"auto"}}>
            <AntDesign name={"hearto"} size={15} style={styles.icon}
            />
          </TouchableOpacity>
        </View>
   
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
      }
})
export default Comments