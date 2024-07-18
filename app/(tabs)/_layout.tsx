import { Tabs, useNavigation } from 'expo-router';
import Ionicons from "@expo/vector-icons/Ionicons";
import { View ,Text, TouchableOpacity} from 'react-native';
import { styles } from './styles/layoutStyles';

export default function TabLayout() {
  const navigation=useNavigation();
  const items = [
    { name: 'forum', text: 'منـتدى التـفاعـل ', icon: 'people', headerIcon:'search'},
    { name: 'prayerTime', text: 'مواعيد الصلاة', icon: 'time',headerIcon:'search'},
    { name: 'adhkar', text: 'أذكـار', icon: 'reader',headerIcon:'search'},
    { name: 'tertil', text: 'تـرتيل', icon: 'headset',headerIcon:'search'},
    { name: 'kiraa', text: 'قـراءة', icon:'book',headerIcon:'search' },

  ];
  return (

    <Tabs screenOptions={{ tabBarActiveTintColor: '#3F566E', tabBarInactiveTintColor:'#AFAFAF'}}>
      {items.map((item, index) => (
      <Tabs.Screen
      key={index}
        name={item.name}
        options={{
          header: () => (
            <View style={styles.container}>
              <Text style={styles.text}>  {item.text}</Text>
              <TouchableOpacity style={styles.menu} onPress={()=>navigation.goBack}>
                <Ionicons name='chevron-back-outline' size={30} color='#F1C40F' />
              </TouchableOpacity>
              <TouchableOpacity style={styles.search}>
                <Ionicons name={item.headerIcon as any} size={27} color='#F1C40F' />
              </TouchableOpacity>
            </View>
          )
          ,title: '',
          tabBarIcon: ({ color }) => <Ionicons size={28} name={item.icon as any} color={color} />,
          tabBarStyle: item.name === 'index' ? { display: 'none' } : {},
        }}
      />
      ))}
      <Tabs.Screen
        name='index'
        options={{
          header: () => (
            <View style={styles.container}>
              <Text style={styles.text}>  صـفحـة رئـيسـية</Text>
              <TouchableOpacity style={styles.menu}>
                <Ionicons name='notifications-outline' size={30} color='#F1C40F' />
              </TouchableOpacity>
              <TouchableOpacity style={styles.search}>
                <Ionicons name='settings-outline' size={27} color='#F1C40F' />
              </TouchableOpacity>
            </View>
          )
          ,title: '',
          tabBarIcon: ({ color }) => <Ionicons size={28} name='home' color={color} />,
          tabBarStyle: { display: 'none' } ,
        }}
      />
    </Tabs>
  );
}
