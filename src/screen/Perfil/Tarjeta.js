import React, {useState} from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native';
import { Text, Card, Button, Title,Paragraph, TextInput, Avatar } from 'react-native-paper';
import firebase from '../../utils/firebase';
import 'firebase/database';
import {colors } from '../../utils/tema';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Perfil/Header';
import chunk from "lodash"
export default function Tarjeta(){

    const [form, setForm] = useState({});
    
    const post = [
     [
        {
            id:1,
            img: 'https://picsum.photos/700'
        },
        {
            id:2,
            img: 'https://picsum.photos/700'
        },
        {
            id:3,
            img: 'https://picsum.photos/700'
        },
        {
            id:4,
            img: 'https://picsum.photos/700'
        },
        ]
    ];

    const update = () => {

        //console.log('contactos/' + user.uid + '/' + contacto.uid )
        
        firebase.database()
        .ref('contactos/' + user.uid  + '/-MR_u4TWEHXK-tDpF0Tw')
        .update(form)
        .then( () => console.log('ok'))
      
        console.log(form)
        
    }

    return(

        <View style={{ flex:1 }}>

            <Header />

            <View  style={{ flexDirection: 'row', borderWidth: 1, width: '100%' }}>
                <View style={{ padding: 10 }}>
                    <TouchableOpacity>
                        <Image source={{uri:'https://picsum.photos/700'}} style={{ height: 100, width: 100, borderRadius: 50 }} />
                    </TouchableOpacity>  
                </View>

                <View style={{ padding: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>45</Text>
                    <Text style={{ marginTop: 5}}>Publicaciones</Text>
                </View>

                <View style={{ padding: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>45</Text>
                    <Text style={{ marginTop: 5}}>Publicaciones</Text>
                </View>
            </View>

            <View  style={{ flexDirection: 'row' }}>
                <View style={{ padding: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Leandro rocha</Text>
                    <Text style={{ marginTop: 5}}>Publicaciones</Text>
                    <Text style={{ marginTop: 5}}>Publicaciones</Text>
                </View>               
            </View>

            <View style={{ padding: 20 }}>
                <Button mode="contained" onPress={() => console.log('Pressed')} style={{ backgroundColor: colors.primary }}>
                    Editar perfil
                </Button>
            </View>

            <View  style={{ flexDirection: 'row' }}>
                <View style={{ padding: 20, marginTop: 10 }}>
                    <ScrollView >
                        
                       

                    {
                        chunk(post, 2).map((data, index) => (
                            
                            <TouchableOpacity
                                key={index}
                            >
                                <View style={{ width: '50%' }}>
                                    <Image 
                                        source={{ uri: 'https://picsum.photos/700' }}
                                        style={{
                                            width: 250,
                                            height: 250
                                        }}
                                    />
                                </View>
                          
                            </TouchableOpacity>

                        ))



                        /*
                        [1,2,3,4,5,6,7,8,9].chunk((data, index) => (

                            <TouchableOpacity>
                                <View style={{ width: '50%' }}>
                                    <Image 
                                        source={{ uri: 'https://picsum.photos/700' }}
                                        style={{
                                            width: 250,
                                            height: 250
                                        }}
                                    />
                                </View>
                          
                            </TouchableOpacity>

                        ))
                        */
                        
                    }

                    
                    </ScrollView>
                </View>               
            </View>
            

        </View>

       

    )

    /*
    return(
        <>
        <Card>
            <Card.Content>
                <Title></Title>
                <Paragraph></Paragraph>
            </Card.Content>
            
        </Card>
        <Card>
            <Card.Content>
                <TextInput
                label="Nombre"
                style={styles.input}
                underlineColor="#77c5d5"
                onChange={ (e) => setForm({...form, nombre: e.nativeEvent.text }) }
                //defaultValue={contacto.nombre}
                
                /> 
                <TextInput
                label="Apellido"
                style={styles.input}
                underlineColor="#77c5d5"
                //defaultValue={contacto.apellido}
                onChange={ (e) => setForm({...form, apellido: e.nativeEvent.text }) }
                />  
                <TextInput
                label="Email"
                style={styles.input}
                underlineColor="#77c5d5"
                //defaultValue={contacto.email}
                onChange={ (e) => setForm({...form, email: e.nativeEvent.text }) }
                />  
                <Button mode="contained" onPress={ update }>
                    Guardar datos
                </Button>                

            </Card.Content>
            
        </Card>
        </>
        
    )
    */

}

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor: 'white', padding: 20
    },
    footer: {
        position:'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        marginBottom: 20,
    },
    btn:{
        marginLeft: 'auto'
    },
    input:{
        height: 50,
        width: '100%',
        marginBottom: 20,
        backgroundColor: '#f9f9f9'
    }

});