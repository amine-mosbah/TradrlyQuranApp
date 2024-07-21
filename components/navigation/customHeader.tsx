import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '@/app/(tabs)/styles/layoutStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

interface CustomHeaderProps {
  title: string;
  showBackButton: boolean;
  showSearchButton: boolean;
}

export default function CustomHeader({ title, showBackButton, showSearchButton }: CustomHeaderProps) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity style={styles.menu} onPress={() => router.back()}>
          <Ionicons name='chevron-back-outline' size={30} color='#F1C40F' />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{title}</Text>
      {showSearchButton &&(
        <TouchableOpacity style={styles.search}>
        <Ionicons name='search' size={27} color='#F1C40F' />
      </TouchableOpacity>)}
    </View>
  );
}
