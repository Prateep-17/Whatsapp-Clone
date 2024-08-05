import { StyleSheet, Text, TouchableWithoutFeedback, Image, View } from 'react-native'
import React from 'react'
import { user } from '@/constants/types'
import { useNavigation } from '@react-navigation/native'

type ContactListItemProps = {
    user :user
}

const ContactListItem = (props: ContactListItemProps) => {
    const { user } = props
    const navigation = useNavigation<any>()
    const onClick = () => {
        navigation.navigate('ChatRoom',{id:user.id, name:user.name})
    }
  return (
    <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: user.imageUri}}/>
            <Text style={styles.name}>{user.name}</Text>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default ContactListItem

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginBottom:10
    },
    image:{
        width:45,
        height:45,
        borderRadius:50
    },
    name:{
        justifyContent:'center',
        fontWeight:'500',
        padding:10
    }
})