import React from 'react';
import { View, SafeAreaView, StyleSheet, FlatList, Image,ScrollView } from 'react-native';
import Header from '../components/Home/Header';
import posts from '../utils/data';
import Post from '../components/Post';
import Stories from '../components/Stories/index';
//import Post from '../components/Post/index';


export default function Home({navigation}){

    /*
    const posts = {

        user:{
            imgUr: 'https://picsum.photos/700',
            name: 'Prueba'
        }

    }
    */

    return(
      
       
        <SafeAreaView style={styles.container}>
            
            <Header navigation={navigation} />  
            <Stories />
           
           
            <ScrollView>
               {
                    posts.map((data, index) => (
                        <Post posts={data} key={index} />
                    ))

               }     

            </ScrollView>
        </SafeAreaView>
        
    )

}

const styles = StyleSheet.create({

    container:{
        flex: 1,
    }
    
})