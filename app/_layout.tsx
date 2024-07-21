import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import CustomHeader from '@/components/navigation/customHeader'

const Layout =()=> {
  return (
    <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name="(tabs)" />
    <Stack.Screen name="settings" options={{ headerShown:true, header: () => (
            <CustomHeader title="إعدادات" showBackButton={true} showSearchButton={false}/>
          ),
        }}/>
    <Stack.Screen name="notifications" options={{headerShown:true, header: () => (
            <CustomHeader title="تنبيهات" showBackButton={true} showSearchButton={false}/>
          ),
        }} />
    </Stack>
  )
}
export default  Layout