import { ImageBackground, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import Chats from '@/constants/Chats'
import ChatRoomListItem from '@/components/navigation/ChatRoomListItem'
import TextInputBox from '@/components/navigation/TextInputBox'
// import {Background} from '../assets/images/BG.png'

const ChatRoom = () => {
  const route = useRoute()
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/BG.png')}
        resizeMode='cover' style={{flex:1}}>
        <FlatList
          data={Chats.messages}
          renderItem={({item})=> <ChatRoomListItem message={item} />}
          inverted
        />
        <TextInputBox/>
      </ImageBackground>
    </View>
  )
}

export default ChatRoom

const styles = StyleSheet.create({ 
  container:{
    flex:1
  } 
})