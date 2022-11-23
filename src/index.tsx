import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import { EditProfileScreen, Home, PostUploadScreen, Profile } from "./containers";


const Stack = createNativeStackNavigator();

const AppStack=()=>{
return(
<Stack.Navigator>
    <Stack.Screen name="Post" component={Home}/>
    <Stack.Screen name="PostUploadScreen" component={PostUploadScreen}/>
    <Stack.Screen name="ProfileScreen" component={Profile}/>
    <Stack.Screen name="EditProfile" component={EditProfileScreen}/>
</Stack.Navigator>
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