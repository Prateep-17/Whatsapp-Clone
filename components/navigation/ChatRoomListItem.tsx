import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { message } from '@/constants/types'
import moment from 'moment'

type ChatMessage = {
    message : message
}

const ChatRoomListItem = ( props :ChatMessage) => {
    const { message } = props
    const isMessage = () =>{
        return message.user.id === 'u1'
    }
  return (
    <View style={styles.container}>
        <View style={[styles.messageBox,
            {   backgroundColor: isMessage() ? "#dcf8c5" : "lightgray",
                marginRight: isMessage() ? 0 : 50,
                marginLeft: isMessage() ? 50 :0 }
        ]}>
            {!isMessage() && <Text style={styles.name}>{message.user.name}</Text>}
            <Text>{message.content}</Text>
            <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
        </View>
    </View>
  )
}

export default ChatRoomListItem

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    messageBox:{
        flex:1,
        padding:10,
        borderRadius:10
    },
    name:{
        color:'blue',
        fontWeight:'500'
    },
    time:{
        alignSelf:'flex-end',
        color:'gray'
    }
    
})