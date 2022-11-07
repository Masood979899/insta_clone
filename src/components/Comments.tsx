import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"

const Comments = () => {
  return (
    <View>
     <Text style={{ color: "grey", marginTop: "2%" }}>view all 19 comments</Text>
        <View style={styles.comment}>
          <Text><Text style={{ fontWeight: "600" }}>masoood</Text>
            <Text style={{}}> yayy keep it up </Text>
          </Text>
          <TouchableOpacity style={{ marginLeft: "auto" }}>
            <AntDesign name={"hearto"} size={18} style={styles.icon}
            />
          </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
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