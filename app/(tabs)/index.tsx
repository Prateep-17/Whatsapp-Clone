import ChatListItem from '@/components/navigation/ChatListItem';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatRooms from '@/constants/ChatRooms';
import NewChat from '@/components/navigation/NewChat';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={ChatRooms}
        renderItem={({item})=><ChatListItem chatRoom={item}/>}
      />
      <NewChat/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    position:'relative',
    justifyContent:'center',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal:2
  }
});
