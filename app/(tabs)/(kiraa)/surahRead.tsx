import React, { useEffect, useState, useRef } from 'react';
import { FlatList, Text, StyleSheet, View, ImageBackground } from 'react-native';
import axios from 'axios';
import * as Font from 'expo-font';
import { useLocalSearchParams } from 'expo-router';

interface Ayah {
  number: number;
  text: string;
  page: number;
  juz: number;
  numberInSurah: number;
}

interface Surah {
  number: number;
  name: string;
  ayahs: Ayah[];
}

const QuranPage = () => {
  const { number } = useLocalSearchParams<{ number: string }>();

  const [surah, setSurah] = useState<Surah | null>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentJuz, setCurrentJuz] = useState(1);
  const flatListRef = useRef<FlatList>(null);

  
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'AlQalamQuranMajeed': require('@/assets/fonts/Al Qalam Quran Majeed.ttf'),
        'Hafs': require('@/assets/fonts/Hafs.ttf'),
        'Amiri': require('@/assets/fonts/Amiri.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  useEffect(() => {
    const fetchSurahData = async () => {
      try {
        const response = await axios.get('https://api.alquran.cloud/v1/quran/quran-uthmani');
        const { data } = response.data;
        const foundSurah = data.surahs.find((s: Surah) => s.number.toString() === number);
        setSurah(foundSurah);
      } catch (error) {
        console.error('Error fetching Quran data:', error);
      }
    };

    if (number) {
      fetchSurahData();
    }
  }, [number]);

  const handleViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      const firstViewableItem = viewableItems[0].item;
      setCurrentPage(firstViewableItem.page);
      setCurrentJuz(firstViewableItem.juz);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  if (!fontsLoaded) {
    return null; 
  }

  if (!surah) {
    return <Text style={styles.loadingText}>تحميل ...</Text>; 
  }

  const pages = surah.ayahs.reduce((acc: any, ayah) => {
    if (!acc[ayah.page]) {
      acc[ayah.page] = [];
    }
    acc[ayah.page].push(ayah);
    return acc;
  }, {});

  const renderItem = ({ item }: { item: { page: number; ayahs: Ayah[] ,juz:number} }) => (
    <View>
      {item.ayahs.map((ayah) => (
        <Text key={ayah.numberInSurah} style={styles.ayahText}>
          {ayah.text} {'('}{ayah.numberInSurah}{')'}
        </Text>
      ))}
      <Text></Text>
      <View style={{flex:1, flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <View style={{height: 2,
      width: '35%',
      backgroundColor: '#CED0CE',}}/>
      <Text style={styles.pageNumber}>الصفحة {item.page}</Text>
      <View style={{height: 2,
      width: '35%',
      backgroundColor: '#CED0CE',}}/>
      </View>
      <Text></Text>
    </View>
  );

  const pageData = Object.keys(pages).map((page) => ({
    page: Number(page),
    ayahs: pages[page],
    juz: Number(pages[page][0].juz),
  }));


  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pageInfo}>الصفحة {currentPage}</Text>
        <Text style={styles.surahTitle}>{surah.name}</Text>
        <Text style={styles.pageInfo}>الجزء {currentJuz}</Text>
      </View>
      <FlatList
        ref={flatListRef}
        data={pageData}
        keyExtractor={(item) => item.page.toString()}
        renderItem={renderItem}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </View>

  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  surahTitle: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#5DADE2',
    textAlign: 'center',
    fontFamily: 'AlQalamQuranMajeed',
  },
  pageInfo: {
    fontSize: 20,
    color: '#5DADE2',
    fontFamily: 'AlQalamQuranMajeed',
  },
  ayahText: {
    fontSize: 25,
    lineHeight: 50,
    textAlign: 'center',
    fontFamily: 'Hafs',
  },
  pageNumber: {
    fontSize: 24,
    fontWeight: 'medium',
    color: '#5DADE2',
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'AlQalamQuranMajeed',

  },
  loadingText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default QuranPage;
