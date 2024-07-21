import React from 'react';
import { Stack } from 'expo-router';
import CustomHeader from '@/components/navigation/customHeader';

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="tertil" options={{ header: () => (
            <CustomHeader title="تــرتـيـل" showBackButton={false} showSearchButton={true}/>
          ),
        }}/>
      <Stack.Screen name="sheikhSoura" options={{header: () => (
            <CustomHeader title="تــرتـيـل"  showBackButton={true} showSearchButton={true} />
          ),
        }}/>
    </Stack>
  );
}
export default _layout;
