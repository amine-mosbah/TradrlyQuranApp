import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Surahs from '@/components/surahs';
import { supabase } from '@/utils/supabase';
import { useEffect, useState } from 'react';

const Tab = createMaterialTopTabNavigator();

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
  const [surahs , setSurahs] : any= useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurahs = async () => {
      let { data: surahs, error } = await supabase
        .from('Surahs')
        .select();

      if (error) {
        console.error(error);
        setSurahs(null);
      } else {
        setSurahs(surahs);
      }

      setLoading(false);
    };

    fetchSurahs();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>تحميل ...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={surahs}
      renderItem={({ item }) => (
        <Surahs
          number={item.id}
          surahName={item.name}
          type={item.type === 'Medinan' ? 'مدنيّة' : 'مكّية'}
          verses={item.verses + (item.verses < 11 ? ' آيات' : ' آية')}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => (
        <View
          style={{
            height: 1,
            width: '85%',
            backgroundColor: '#CED0CE',
            alignSelf: 'center',
          }}
        />
      )}
    />
  );
}

export default function Kiraa() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 20 },
        tabBarActiveTintColor: '#5DADE2',
        tabBarInactiveTintColor: '#AFAFAF',
        tabBarIndicatorStyle: { backgroundColor: '#5DADE2' },
      }}
      initialRouteName="سورة"
    >
      <Tab.Screen name="جزء" component={Juz} />
      <Tab.Screen name="حزب" component={Hizb} />
      <Tab.Screen name="سورة" component={Soura} />
    </Tab.Navigator>
  );
}
