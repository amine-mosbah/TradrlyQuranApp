import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { surahs } from '../data/Sourah';
import Surahs from '@/components/surahs';

function Juz() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>جزء</Text>
    </View>
  );
}

function Hizb() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>حزب</Text>
    </View>
  );
}

function Soura() {
  return (
    <FlatList
        data={surahs}
        renderItem={({ item }) => <Surahs number={item.id} surahName={item.name}  />}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{height: 1,
          width: '85%',
          backgroundColor: '#CED0CE',
          alignSelf: 'center',}} />}
      />
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Kiraa() {
  return (

      <Tab.Navigator screenOptions={{tabBarLabelStyle:{fontSize:20}, tabBarActiveTintColor:'#5DADE2', tabBarInactiveTintColor:'#AFAFAF',  tabBarIndicatorStyle:{backgroundColor:'#5DADE2'}}} initialRouteName='سورة'>
        <Tab.Screen name="جزء" component={Juz} /> 
        <Tab.Screen name="حزب" component={Hizb} />
        <Tab.Screen name="سورة" component={Soura} />
      </Tab.Navigator>
  );
}
