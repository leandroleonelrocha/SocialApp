import React, {useEffect, useState} from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import { Text } from 'react-native-paper';
import  Lista  from '../components/Lista';
import  ActionBar  from '../components/ActionBar';
import { useRoute } from '@react-navigation/native';
import firebase from '../utils/firebase';
import {map} from 'lodash';
import 'firebase/database';
import 'firebase/auth';

export default function Contactos(){

    const [ showList, setShowList ] = useState({});
    const [ recargar, setRecargar ] = useState(false); 

    const user = firebase.auth().currentUser;
    
    useEffect( () => {
       
        firebase.database().ref('/contactos/' + user.uid).once('value').then((response) => {
            const itemsArray = [];
            
            response.forEach((data) => {
                
                itemsArray.push(data.val());
            });
            setShowList(itemsArray)
        });
        setRecargar(false)
     

    }, [recargar]);
    
    return(
        <View style={styles.container}>
            <ScrollView>
            {   map (showList, (contacto, index) => (
              
                <Lista contacto={contacto} key={index} user={user}  />
            ) )}
            </ScrollView>
            <ActionBar user={user} />
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        height: '100%',
    },

});