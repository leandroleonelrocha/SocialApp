import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import { Card, Button, Title, Paragraph, Avatar, IconButton  } from 'react-native-paper';
import like from '../assets/icons/like.png';
import share from '../assets/icons/share.png';
import comentario from '../assets/icons/comentario.png';
import message from '../assets/icons/message.png';
import { colors} from '../utils/tema';
import Icon from 'react-native-ionicons';
export default function Post(props){

    const { posts } = props
    console.log(colors)
    return(
        
        <Card>
            <Card.Content>
                <Card.Title
                    title="Card Title"
                    subtitle="Card Subtitle"
                    left={(props) => <Avatar.Image size={36} source={{uri:'https://picsum.photos/700'}} />}
                    //right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />}
                />
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <View style={{ padding: 10 ,flexDirection: 'row' }} >
                    
                    <View style={{ flexDirection: 'row' , justifyContent:'flex-start', width: '50%' }}>
                        <Text>35 Me gusta</Text>
                    </View>

                    <View style={{ flexDirection: 'row' , justifyContent: 'flex-end', width: '50%' }}>
                    <TouchableOpacity style={{ marginRight: 10}}>
                        <Image 
                            source={like}
                            style={{
                                height: 30,
                                width: 30,
                                tintColor: colors.gray
                            }}
                        />

                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginRight: 10}}>
                        <Image 
                            source={comentario}
                            style={{
                                height: 30,
                                width: 30,
                                tintColor: colors.gray
                            }}
                        />

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={share}
                            style={{
                                height: 30,
                                width: 30,
                                tintColor: colors.gray
                            }}
                        />
                        
                    </TouchableOpacity>
                    </View>
                    </View>
          
                <View style={{ flexDirection: 'row', padding: 5 }}>
                    <Text style={{ fontWeight:'bold' }}>Romeri.ok </Text>
                    <Text>Lorem impsum</Text>
                </View> 

                <View style={{ padding: 5, flexDirection: 'row' }}>
                    
                    <View>
                        <Avatar.Image size={36} source={{uri:'https://picsum.photos/700'}} />
                    </View>
                    <View style={{ marginLeft: 10, marginRight: 10}}>
                        <TextInput 
                            style={{ width: 280, height: 40,  padding: 5 }}
                            placeholder= 'Agrega un comentario...'
                            placeholderTextColor= {colors.gray}
                            
                        />
                    </View>

                    <View>
                        <TouchableOpacity  >
                            <Image 
                                source={message}
                                style={{ width: 20, height: 20}}
                            />
                        </TouchableOpacity>

                    </View>


                </View>

            </Card.Content>
        </Card>
            
        
    )

}