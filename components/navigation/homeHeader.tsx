import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '@/app/(tabs)/styles/layoutStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import {  useRouter } from 'expo-router';

interface CustomHeaderProps {
  title: string;
  showBackButton: boolean;
}

export default function HomeHeader() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      
        <TouchableOpacity style={styles.menu} onPress={() => router.push('/notifications')}>
          <Ionicons name='notifications-outline' size={30} color='#F1C40F' />
        </TouchableOpacity>
      <Text style={styles.text}> صـفحـة رئـيسـية</Text>
      <TouchableOpacity style={styles.search} onPress={() => router.push('/settings')}>
        <Ionicons name='settings-outline' size={27} color='#F1C40F' />
      </TouchableOpacity>
    </View>
  );
}
