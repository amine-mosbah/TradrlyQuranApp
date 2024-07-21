import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SurahStarIcon({ number, name }: { number: number; name: string }) {
  return (



    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Ionicons name='play' size={15} color='#000' />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
        <View style={styles.starContainer}>
          <Image source={require('@/assets/images/surahStar.png')} style={styles.starImage} />
          <Text style={styles.surahNumber}>{number}</Text>
        </View>
      </View>
    </View>
    


  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
    width: '100%',
    paddingHorizontal: 25,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#D4D4D9',
    borderRadius: 100,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingLeft: 10,
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
    fontSize: 15,
    fontWeight: 'bold',
  }
});
