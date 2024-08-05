import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const NewChat = () => {
    const navigation = useNavigation<any>()
    const createNewChat = () =>{
        navigation.navigate('Contacts')
    }
  return (
    <TouchableWithoutFeedback onPress={createNewChat}>
        <View style={styles.createButton}>
            <MaterialIcons name="message" size={28} color="white" />
        </View>
    </TouchableWithoutFeedback>
  )
}

export default NewChat

const styles = StyleSheet.create({
    createButton:{
        position:'absolute',
        backgroundColor:"green",
        borderRadius:50,
        padding:15,
        right:15,
        bottom:20,
      }
})