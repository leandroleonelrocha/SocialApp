/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import firebase from './src/utils/firebase';
import 'firebase/auth';
import Auth from './src/screen/Auth/Auth';
import {decode, encode} from 'base-64';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/navigations/TabNavigation';
import Home from './src/screen/Home';
import Post from './src/components/Post';
import { colors} from './src/utils/tema';


if (!global.btoa) global.btoa = encode;
if (!global.atob) global.atob = decode;
export default function App(){
  /*
  return(
    <>
      <SafeAreaView>
      <StatusBar />
      <Home />
      </SafeAreaView>
    </>

  )
   */

  
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response);
    });
  }, []);

  if (user === undefined) return null;

  return(
  <PaperProvider>
    <StatusBar barStyle='dark-content' />
    <SafeAreaView style={styles.content}>
    
    { user ? (
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
     
     
    ) : (
      <Auth />
    )}
    </SafeAreaView>
          
  </PaperProvider>
    
  )

 

  

}

const styles = StyleSheet.create({
  content:{
    height: '100%',
    backgroundColor: colors.primary3,
  }
})  
