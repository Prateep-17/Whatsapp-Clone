import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons, FontAwesome5, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

const TextInputBox = () => {
  const [text, setText] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FontAwesome5 name="smile" size={24}  color="gray" />
          <TextInput
            style={styles.input}
            onChangeText={setText}
            placeholder='Enter text'
            value={text}
            multiline
          />
        <FontAwesome  name="paperclip" size={24} color="gray" />
        <MaterialIcons name="camera-alt" size={24} color="gray" />
      </View>
      <View style={styles.button}>
        {
          !text ?
          <MaterialCommunityIcons name="microphone" size={24} color="white" />
          :
          <MaterialIcons name="send" size={24} color="white" />
        }
      </View>
    </View>
  )
}

export default TextInputBox

const styles = StyleSheet.create({
  container:{
    flexDirection:'row'
  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'white',
    borderRadius:30,
    padding:10,
    margin:10,
    justifyContent:'center',
    gap:15,
    alignItems:'flex-end'
  },
  input:{
    flex:1,
    borderRadius:40,
    fontSize:18,
    position:'relative'
  },
  button:{
    backgroundColor:"green",
    height:45,
    width:45,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-end',
    overflow:'hidden',
    marginBottom:10,
    marginRight:3,
    borderRadius:80,
  }
})