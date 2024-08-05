import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import Users from '@/constants/Users'
import ContactListItem from '@/components/navigation/ContactListItem'

const Contacts = () => {
  return (
    <View style={styles.container}> 
        <FlatList
            data={Users}
            renderItem={({item})=><ContactListItem user={item}/>}
        />
    </View>
  )
}

export default Contacts

const styles = StyleSheet.create({
    container:{
        padding:10
    }
})