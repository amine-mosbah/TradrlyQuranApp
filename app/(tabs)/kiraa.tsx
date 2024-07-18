import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>سورة</Text>
    </View>
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
