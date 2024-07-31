import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ChatRoom } from '@/constants/types'
import moment from 'moment'

type ChatRoomProps = {
    chatRoom : ChatRoom
}

const ChatListItem = (props :ChatRoomProps) => {
    const { chatRoom } = props
    const user = chatRoom.users[1]
  return (
    <View style={styles.container}>
        <Image source={{uri : user.imageUri}} style={styles.avatar}/>
        <View style={styles.content}>
            <View style={styles.flat}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
                {/* <Text style={styles.time}>Yesterday</Text> */}
            </View>
            <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
        </View>
    </View>
  )
}

export default ChatListItem

const styles = StyleSheet.create({
    avatar:{
        height:40,
        width:40,
        borderRadius:20
    },
    container:{
        flexDirection: "row",
        padding:5,
        // width:"100%"
    },
    flat:{
        flexDirection: "row",
        justifyContent:'space-between',
        paddingVertical:3
    },
    content:{
        flex:1,
        paddingHorizontal:10,
    },
    userName:{
        fontWeight:'bold'
    },
    time:{
        color:'grey',
        fontSize: 14
    },
    lastMessage:{
        color:'grey'
    }
})