import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import AudioPlayer from '@/components/audioPlayer';
import { sheikhs } from '../data/sheikhs';

export default function SurahPlay() {
  const { name, image, surahName } = useLocalSearchParams<{ name: string; image: any; surahName: string; }>();

  if (!name || !image || !surahName) {
    return <Text>Invalid data provided</Text>;
  }
  
  const sheikh = sheikhs.find(s => s.name === name);

  if (!sheikh) {
    return <Text>Sheikh not found</Text>;
  }

  const item = sheikh.surah.find(s => s.name === surahName);

  if (!item?.audio) {
    return <Text>Audio not available for this surah</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.surahText}>سورة {surahName}</Text>
      <Text style={styles.nameText}>{name}</Text>
      <AudioPlayer audio={item.audio} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    top:10
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 20,
    borderRadius: 1000,
  },
  nameText: {
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    paddingTop: 10,
  },
  surahText: {
    fontSize: 30,
    fontWeight: "400",
    textAlign: "center",
    paddingTop: 40,
  },
});
