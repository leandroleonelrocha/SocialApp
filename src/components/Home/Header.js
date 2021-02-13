import React,{useState} from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import { Appbar } from 'react-native-paper';
import { colors} from '../../utils/tema';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-ionicons';

export default function Header(props){
    const { navigation } = props
    const [ image, setImage] = useState(null)
    // Seleccionar imagen

    const options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
    };

    const SelectImage = () => {
        const options = {
          title: 'Subir Imagen',
          takePhotoButtonTitle: 'Tomar Foto',
          chooseFromLibraryButtonTitle: 'Elegir de la biblioteca',
          mediaType: 'photo',
          quality: 0.6,
          noData: true,
          maxWidth: 1280,
          maxHeight: 1280,
          storageOptions: {
            skipBackup: true,
            path: 'Siseo',
            cameraRoll: true,
          },
        };
        ImagePicker.showImagePicker(options, response => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            setImage(response);
            console.log('response')
          }
        });
    };

    return(
        <Appbar.Header style={styles.content}>
            <Appbar.Content title="Social App" />
            <Appbar.Action icon="comment-plus" onPress={  () => {navigation.navigate('NuevoPostScreen')}  } />
            
            <Appbar.Action icon="message-text" onPress={() => {navigation.navigate('ChatScreen')} }/>
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({

    content:{
      backgroundColor: colors.primary3
    }

})