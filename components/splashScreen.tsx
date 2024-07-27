import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
const SplashScreen = () => {
  return (
    <View style={{backgroundColor:'#34495E',flex:1, justifyContent:'center',alignItems:'center'}}>
        <Image source={require('@/assets/images/splashIcon.png')}  style={{height:223,width:190}}></Image>
    </View>
  )
}

export default SplashScreen