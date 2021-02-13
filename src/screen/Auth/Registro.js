import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button, Title} from 'react-native-paper';
import {validateEmail } from '../../utils/validation';
import firebase from '../../utils/firebase';
import 'firebase/auth';

export default function Registro(props){
    const { cambiarForm } = props
    const [form, setForm] = useState(defaultValue());
    const [error, setError] = useState({});
    


    const registroAdd = () =>{

        let errors = {};
        if( !form.usuario ||  !form.email ||  !form.password ||  !form.repeatPassword ){
            if(!form.usuario) errors.usuario = true;
            if(!form.email) errors.email = true;
            if(!form.password) errors.password = true;
            if(!form.repeatPassword) errors.repeatPassword = true;
        }else if(!validateEmail(form.email)){
            errors.email = true;
        }else if( form.password !== form.repeatPassword ){
            errors.password = true;
            errors.repeatPassword = true;
        }else{
            firebase
            .auth()
            .createUserWithEmailAndPassword(
              form.email,form.password
            )
            .then((userRecord) => {
                // See the UserRecord reference doc for the contents of userRecord.
                console.log('Successfully created new user:', userRecord.uid);
            })
            .catch((error) => {
                console.log('Error creating new user:', error);
            });

            console.log('Enviado')
        }

        setError(errors);
        console.log(error)
    }


    return(
        <>
        <Title>Registro</Title>

        <TextInput
        label="Usuario"
        style={styles.input}
        onChange={ (e) => setForm({...form, usuario: e.nativeEvent.text }) }
        error={error.usuario}
        underlineColor="#77c5d5"
        />
        <TextInput
        label="Email"
        style={styles.input}
        onChange={ (e) =>  setForm({...form, email: e.nativeEvent.text})  }
        error={error.email}
        underlineColor="#77c5d5"
        />
        <TextInput
        label="Password"
        style={styles.input}
        onChange={ (e) => setForm({...form, password: e.nativeEvent.text})  }
        error={error.password}
        underlineColor="#77c5d5"
        />

        <TextInput
        label="RepeatPassword"
        style={styles.input}
        onChange={ (e) => setForm({...form, repeatPassword: e.nativeEvent.text})  }
        error={error.repeatPassword}
        underlineColor="#77c5d5"
        />

        <Button style={styles.viewBtn}  mode="contained" onPress={ registroAdd }>
            Enviar
        </Button>

        <View style={styles.sesion}>
            <TouchableOpacity onPress={cambiarForm}>
                <Text>Iniciar sesión</Text>
            </TouchableOpacity>
        </View>

        
        </>
    )

}

function defaultValue(){
    return {
        usuario: '',
        email: '',
        password: '',
        repeatPassword: ''
    };
}

const styles = StyleSheet.create({
  input:{
    height: 50,
    width: '80%',
    marginBottom: 20,
    backgroundColor: '#f9f9f9'
    
  },
  viewBtn:{
   textAlign: 'right'
  },
  sesion:{
      flex:1,
      justifyContent:'flex-end',
      marginBottom: 10
  }

})  