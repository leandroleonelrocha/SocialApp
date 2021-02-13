import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Contactos from '../screen/Contactos';
import NuevoPostScreen from '../screen/Home/NuevoPostScreen';
import Home from '../screen/Home';
import ChatScreen from '../screen/Home/ChatScreen';

const Stack = createStackNavigator();

export default function StackNavigation(props) {
  const {navigation} = props;

  return (
    <Stack.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        headerShown: false

            }}
    >

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerShown: false
        }}
      />
      
      <Stack.Screen
        name="NuevoPostScreen"
        component={NuevoPostScreen}
        options={{
          title: 'Nuevo Post',
        }}
      />

      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          title: 'Chat',
        }}
      />

      
      
    </Stack.Navigator>
  );
}