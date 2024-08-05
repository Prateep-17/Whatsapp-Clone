import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { ChatRoom } from '@/constants/types'
import moment from 'moment'
import { useNavigation } from 'expo-router'

type ChatRoomProps = {
    chatRoom : ChatRoom
}

const ChatListItem = (props: ChatRoomProps) => {
    const { chatRoom} = props
    const user = chatRoom.users[1]
    const navigation = useNavigation<any>()
    const onClick = () =>{
        navigation.navigate('ChatRoom', {id:chatRoom.id, name: user.name})
    }
  return (
    <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <Image source={{uri : user?.imageUri}} style={styles.avatar}/>
            <View style={styles.content}>
                <View style={styles.flat}>
                    <Text style={styles.userName}>{user?.name}</Text>
                    <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
                </View>
                <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
            </View>
        </View>
    </TouchableWithoutFeedback>
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