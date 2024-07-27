import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import CustomHeader from '@/components/navigation/customHeader'

const _layout = () => {
  return (
    <Stack >
      <Stack.Screen name="kiraa" options={{ header: () => (
            <CustomHeader title="قـــراءة" showBackButton={false} showSearchButton={true}/>),}}/>
      <Stack.Screen name="surahRead" options={{ header: () => (
            <CustomHeader title="قـــراءة" showBackButton={true} showSearchButton={false}/>),}}/>      
    </Stack>
  )
}

export default _layout