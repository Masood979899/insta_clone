import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import CustomHeader from "./components/CustomHeader";
import { CommentScreen, EditProfileScreen, Home, PostUploadScreen, Profile } from "./containers";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import colors from "./theme/colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStack=()=>{
  return(
    <Stack.Navigator>
         <Stack.Screen name="FeedPost" component={Home} options={{headerShown:false}}/>
    {/* <Stack.Screen name="PostUploadScreen" component={PostUploadScreen}/> */}
    <Stack.Screen name="ProfileScreen" component={Profile} />
    </Stack.Navigator>
  )
}

const ProfileStack=()=>{
  return(
    <Stack.Navigator>
         <Stack.Screen name="MyProfile" component={Profile} options={{headerShown:false}}/>
    {/* <Stack.Screen name="PostUploadScreen" component={PostUploadScreen}/> */}
    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  )
}


const AppStack=()=>{
return(
<Stack.Navigator>
  
    <Stack.Screen name="Feeds" component={BottomTabNav} options={{header:CustomHeader}}/>
    {/* <Stack.Screen name="PostUploadScreen" component={PostUploadScreen}/> */}
    <Stack.Screen name="ProfileScreen" component={Profile} />
    <Stack.Screen name="Comments" component={CommentScreen}/>
  
    
</Stack.Navigator>
)
}

const BottomTabNav= () => {
  return(
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={HomeStack} options={{tabBarIcon:({color,size})=>(
        <MaterialIcons
          name={"home-filled"}
          size={size}
          color={color}
        />
      )}} />
      <Tab.Screen name="Search" component={ProfileStack} options={{tabBarIcon:({size,color})=>(
        <MaterialIcons
          name={"search"}
          size={size}
          color={color}

        />
      )}}/>
      <Tab.Screen name="PostUpload" component={PostUploadScreen} options={{tabBarIcon:({size,color})=>(
        <MaterialIcons
          name={"search"}
          size={size}
          color={color}

        />
      )}}/>

<Tab.Screen name="Notifications" component={PostUploadScreen} options={{tabBarIcon:({color,size})=>(
        <MaterialIcons
          name={"search"}
          size={size}
          color={color}

        />
      )}}/>
      <Tab.Screen name="Profile" component={Profile}
      options={{tabBarIcon:({color,size})=>(
        <MaterialIcons
          name={"search"}
          size={size}
          color={color}
        />
      )}}
      />

    </Tab.Navigator>
  )
}



const Navigation = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen  name="AppStack" component={AppStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
 
  )
}

export default Navigation