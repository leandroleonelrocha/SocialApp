import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ScrollView, Button, TouchableOpacity, Image, TextInput, Touchable} from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import { colors} from '../../utils/tema';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-ionicons';
import { Chip } from 'react-native-paper';

export default function NuevoPostScreen(){

    const [ imagen, setImage] = useState(null)
    const [ listUbicacion, setListUbicacion ] = useState([]);

    const addUbicacion = (item) => {
      const it = [];

      console.log(item)

      


    }

    console.log(listUbicacion)

    // Seleccionar imagen
    const ubicaciones = [
      {
        id: "1",
        title: "San Justo", 
      },
      {
        id: "2",
        title: "Ciudad Evita", 
      },
      {
        id: "3",
        title: "Isidro Casanova", 
      },
      {
        id: "4",
        title: "La Tablada", 
      },
      {
        id: "5",
        title: "Ramos Mejia", 
      },
      {
        id: "6",
        title: "Caseros ", 
      },

    ];

    const dataSource = [
      "Volvo", "Alpha Sports", "Ford", "Gräf & Stift", "Aston Martin", "BMW", "Tarrant Automobile","Push", "Österreichische Austro-Fiat", "Mazda", "Rosenbauer"
    ];

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
            setImage({
              imagePath: response.uri,
              imageHeight: response.height,
              imageWidth: response.width
            });
      
          }
        });
    };

  return (

    <View style={styles.container}>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TouchableOpacity style={{padding: 20}}>
          <Image source={{uri:'https://picsum.photos/700'}} style={{ height: 50, width: 50, borderRadius: 50 }} />
        </TouchableOpacity>  
        <TextInput 
          style={{ width: '70%', height: 50,  marginTop:20 }}
          placeholder="Escribe un pie de foto o video..."
        />
      </View>

      <View style={{ borderWidth: 0.5, borderColor: '#AEABAB', padding: 20  }}>
        <Text style={{ fontSize: 15}}>Etiquetar personas</Text>
      </View>
      <View style={{ borderWidth: 0.5, borderColor: '#AEABAB', padding: 20  }}>
        <Text style={{ fontSize: 15}}>Agregar ubicación</Text>
      </View>
      <View style={{ borderWidth: 0.5, borderColor: '#AEABAB', padding: 10, flexDirection: 'row'  }}>
        
        <FlatList 
          data={ubicaciones}
          keyExtractor={ ({id}) => id }
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={ ({item, index}) => ( 

            <TouchableOpacity
              onPress={ () => { addUbicacion(item) } }
            > 
              <View style={{ width: 150, height: 30, backgroundColor: '#E7E7E7', marginRight: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text >{item.title}</Text>
              </View>
              
            </TouchableOpacity>

          )}
          style={{ padding: 10 }}
        />
      </View>

      <View style={{ flex: 1 }}>
        { !imagen ? 

        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{ backgroundColor: '#E7E7E7', width: 150, height: 50, justifyContent: 'center', alignItems:'center' }}
            onPress={ SelectImage }
          >
          <Text>Seleccionar Imagen</Text>
          </TouchableOpacity>
        </View>
        
        :

        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          <Image 
            source={{uri: imagen.imagePath }}
            style={{
              width: '50%',
              height: '50%'
            }}
          />
          
          <TouchableOpacity 
            style={{ backgroundColor: '#E7E7E7', width: 100, height: 30, justifyContent: 'center', alignItems:'center', marginTop: 10 }}
            onPress={ SelectImage }
          >
            <Text>Guardar</Text>
          </TouchableOpacity>
        </View>
        

        }
      </View>

      



      
      {/*
      <View style = {{flex:1}}>
        {
          dataSource.map((item, index) => {
              return (
                <View style={{
                  margin: 5,
                  flexWrap: 'wrap',
                }}>
                  <Chip
                  key={index}
                  icon="home"
                  mode="outlined" //changing display mode, default is flat.
                  height={30} //give desirable height to chip
                  textStyle={{ color:'white',fontSize: 15 }} //label properties
                  onPress={() =>  console.log('adsas') }>
                  //display text of clicked chip
                  //item to display in chip label  
                  {item}
                  </Chip>
              </View>
            );

          })
      
        }
      </View>
      */
      }
    </View>
  )
      /*

      <View style={styles.container}>
          
      {
        dataSource.map((item, index) => {
            return (
              <View style={{
              margin: 5,
              flexWrap: 'wrap',
              }}>
                <Chip
                key={index}
                icon="home"
                mode="outlined" //changing display mode, default is flat.
                height={30} //give desirable height to chip
                textStyle={{ color:'white',fontSize: 15 }} //label properties
                onPress={() =>  console.log('adsas') }>
                //display text of clicked chip
                //item to display in chip label  
                {item}
                </Chip>
            </View>
          );

        })
     
      }


          <TouchableOpacity 
            onPress={SelectImage} 
            style={styles.capture}
          >
          <Text> Seleccionar Imagen </Text>
          </TouchableOpacity>

          <View>

            { imagen ? 

              <Image 
              source={{uri: imagen.imagePath }}
              style={{
                width: 500,
                height: 500
              }}
            />
            :
              <Text>Hola</Text>            
            }
          
           
          </View>
      </View>
  )

  */

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,0)",
  },
 
    
});