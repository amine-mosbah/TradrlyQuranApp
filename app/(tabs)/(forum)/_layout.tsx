import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import CustomHeader from '@/components/navigation/customHeader'

const _layout = () => {
  return (
    <Stack >
      <Stack.Screen name="forum" options={{ header: () => (
            <CustomHeader title="منـتـدى الـتـفاعـل" showBackButton={false} showSearchButton={true}/>),}}/>

    </Stack>
  )
}

export default _layout