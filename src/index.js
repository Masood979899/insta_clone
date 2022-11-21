import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';


//Screens
import {
  MainScreen,
  WelcomeScreen,
  
} from './Containers'

const Stack = createNativeStackNavigator();




const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: 'transparent'},
        animation: 'simple_push',
        headerShown: false,
      }}
      initialRouteName="WelcomeScreen">
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
      
    </Stack.Navigator>
  );
};

const Navigation = () => {
  
  return (
    
      <NavigationContainer
        screenOptions={{animation: 'simple_push'}}>
        <Stack.Navigator
          screenOptions={{
            // contentStyle: {backgroundColor: 'transparent'},
            animation: 'simple_push',
          }}
          >
          <Stack.Screen
            name="AppStack"
            component={AppStack}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
};

export default Navigation;
