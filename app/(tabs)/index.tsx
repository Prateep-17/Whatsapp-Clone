import ChatListItem from '@/components/navigation/ChatListItem';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatRooms from '@/constants/ChatRooms';
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ChatRooms}
        renderItem={({item})=><ChatListItem chatRoom={item}/>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal:2
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
