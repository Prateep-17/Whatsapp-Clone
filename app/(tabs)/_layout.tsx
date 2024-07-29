// import { Tabs } from 'expo-router';
import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '.';
import TabTwoScreen from './explore';
import Camera from '@/components/navigation/Camera';
import Call from '@/components/navigation/Call';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { FontAwesome } from '@expo/vector-icons';
import { MainTabParamList } from '@/constants/types';

const Tabs = createMaterialTopTabNavigator<MainTabParamList>();

export default function TabLayout() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarStyle:{
          backgroundColor:'darkgreen'
        },
        tabBarIndicatorStyle:{
          backgroundColor:'white',
          height:4
        },
        tabBarLabelStyle:{
          fontWeight:'bold'
        }
      }}>
        <Tabs.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarLabel:()=> null,
          tabBarIcon:()=><FontAwesome name="camera" size={18} color="white" />
        }}/>
        <Tabs.Screen
          name="Chats"
          component={HomeScreen}
        />
        <Tabs.Screen
          name="Status"
          component={TabTwoScreen}
        />
        <Tabs.Screen
          name="Calls"
          component={Call}
        />
    </Tabs.Navigator>
  );
}