import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { View, StyleSheet } from 'react-native';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotFoundScreen from './+not-found';
import TabLayout from './(tabs)/_layout';
import ChatRoom from './ChatRoom';
import Contacts from './Contacts';

const Stack = createNativeStackNavigator();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
      screenOptions={{
        headerShadowVisible:false,
        headerTintColor:"white",
        headerStyle:{
          backgroundColor: 'darkgreen',
        }
      }}>
        <Stack.Screen name="(tabs)"
          component={TabLayout}
          options={{
            title:"Whatsapp",
            headerTitleStyle: {color:'white'},
            headerRight: ()=>
              <View style={styels.headerBar}>
                  <TabBarIcon name = {'search'} color='white'/>
                  <Entypo name="dots-three-vertical" size={24} color="white" />    
                </View>,
          }} />
        <Stack.Screen name="ChatRoom" component={ChatRoom}
          options={({route}:any)=>({
            title: route.params.name,
            headerRight: ()=>
              <View style={styels.headerBar}>
                  <FontAwesome5 name = {'video'} size={24} color='white'/>
                  <TabBarIcon name = {'call'} size={24} color='white'/>
                  <Entypo name="dots-three-vertical" size={24} color="white" />    
                </View>
          })}/>
        <Stack.Screen name="Contacts" component={Contacts}/>
        <Stack.Screen name="+not-found" component={NotFoundScreen}/>
      </Stack.Navigator>
    </ThemeProvider>
  );
}

const styels = StyleSheet.create({
  headerBar:{
    paddingHorizontal:5,
    display:'flex',
    flexDirection:'row',
    gap:25
  }
})