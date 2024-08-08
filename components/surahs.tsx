import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function Surahs({ number, surahName ,type,verses}: {number: number; surahName: string,type:any,verses:any}) {
  const router=useRouter();
  return (
    <TouchableOpacity style={styles.container} onPress={() => router.push({ pathname: '/surahRead', params: { number,surahName } })}>
      <View style={styles.textContainer}>
        <View style={{flexDirection:'column',alignItems: 'flex-end'}}>
        <Text style={styles.text}>{surahName}</Text>
        <View style={{ flexDirection:'row'}}>
        <Text > . {verses}</Text>
        <Text >{type}</Text>
        </View>
        </View>

        <View style={styles.starContainer}>
          <Image source={require('@/assets/images/surahStar.png')} style={styles.starImage} />
          <Text style={styles.surahNumber}>{number}</Text>
        </View>
      </View>
      
    </TouchableOpacity>
    


  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginVertical: 15,
    width: '100%',
    paddingHorizontal: 25,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    color: '#5DADE2',
    fontWeight: 'bold',
  },
  starContainer: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  starImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  surahNumber: {
    fontSize: 13,
    fontWeight: 'bold',
  }
});
