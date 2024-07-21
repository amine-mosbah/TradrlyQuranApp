import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import HomeHeader from '@/components/navigation/homeHeader'

const Layout = () => {
    const router = useRouter();
  return (
    <Tabs  screenOptions={{headerShown:false, tabBarActiveTintColor: '#3F566E', tabBarInactiveTintColor:'#AFAFAF',title:'', }}>
        <Tabs.Screen name="(forum)" options={{tabBarIcon: ({ color }) => <Ionicons size={28} name='people' color={color} />,}}   />
        <Tabs.Screen name="(prayerTime)" options={{tabBarIcon: ({ color }) => <Ionicons size={28} name='time' color={color} />,}}  />
        <Tabs.Screen name="(adhkar)" options={{tabBarIcon: ({ color }) => <Ionicons size={28} name='reader' color={color} />}}  />
        <Tabs.Screen name="(tertil)" options={{tabBarIcon: ({ color }) => <Ionicons size={28} name='headset' color={color} /> ,}} />
        <Tabs.Screen name="(kiraa)" options={{tabBarIcon: ({ color }) => <Ionicons size={28} name='book' color={color} />}}  />
        <Tabs.Screen name="index" options={{headerShown:true,tabBarStyle: { display: 'none' } ,tabBarIcon: ({ color }) => <Ionicons size={28} name='home' color={color} />, header: () => (<HomeHeader/>)}} />

        

    </Tabs>
  )
}

export default Layout