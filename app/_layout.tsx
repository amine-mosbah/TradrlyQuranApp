import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack } from 'expo-router'
import CustomHeader from '@/components/navigation/customHeader'
import SplashScreen from '@/components/splashScreen'

const Layout =()=> {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {showSplash ? <SplashScreen /> :
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
    </Stack>}
    </>
  )
}
export default  Layout