import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar } from 'react-native-paper';
import Search from '../screen/Search';
import Tarjeta from '../screen/Perfil/Tarjeta';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors } from '../utils/tema';
import Root from './Root';
import StackNavigation from '../navigations/StackNavigation';

const Tab = createBottomTabNavigator();
export default function TabNavigation(){

    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel:false
            }}
        >   
            <Tab.Screen 
                name="StackNavigation" 
                component={StackNavigation} 
                options={{ 
                    title:'Root',
                    tabBarIcon: ({ tintColor }) => (
                    //Your icon component for example => 
                    <Icon name="home" size={30} color={colors.primary} />
                    )
                }} 
            
            />


            <Tab.Screen name="Buscar" 
                component={Search} 
                options={{ 
                    title:'Home',
                    tabBarIcon: ({ tintColor }) => (
                    //Your icon component for example => 
                    <Icon name="search" size={30} color={colors.primary} />
                    )
                }} 
            
            />
            
        

            <Tab.Screen name="Tarjeta" 
                component={Tarjeta} 
                options={{
                    tabBarIcon: ({}) => (
                        <Avatar.Image size={28} source={{uri:'https://picsum.photos/700'}} />
                    )
                }}
            />

            
        </Tab.Navigator>
    )

}