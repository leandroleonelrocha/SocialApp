import React from 'react';
import { View, Text } from 'react-native';
import ProfilePicture from '../../components/ProfilePicture/index';
import styles from './styles';
const Story = ({imageUrl, name}) => (

    <View style={styles.container}>
        <ProfilePicture uri={imageUrl} />
        <Text style={styles.name}>{name}</Text>
    </View>


);


export default Story;