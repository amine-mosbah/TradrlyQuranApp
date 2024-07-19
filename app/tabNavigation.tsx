import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Kiraa from '@/app/kiraa';
import Tertil from '@/app/tertil';
import Adhkar from '@/app/adhkar';
import PrayerTime from '@/app/prayerTime';
import Forum from '@/app/forum';
import Index from '@/app';
import { TouchableOpacity, View,Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from '@/app/(tabs)/styles/indexStyles';

const Tab = createBottomTabNavigator();

const MyTabs=()=> {
return (
    <View style={{flex:1, }}>
  
    <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 120,
            backgroundColor: 'white',
            borderColor: 'white'
        }
    }}>
    <Tab.Screen name="prayerTime" component={PrayerTime} options={{tabBarIcon:({ color }) => <Ionicons size={28} name='people' color={color} />}}/>
    <Tab.Screen name="forum" component={Forum} options={{tabBarIcon:({ color }) => <Ionicons size={28} name='time' color={color} />}}/>
    <Tab.Screen name="adhkar" component={Adhkar} options={{tabBarIcon:({ color }) => <Ionicons size={28} name='reader' color={color} />}}/>
    <Tab.Screen name="tertil" component={Tertil} options={{tabBarIcon:({ color }) => <Ionicons size={28} name='headset' color={color} />}} />
    <Tab.Screen name="kiraa" component={Kiraa} options={{tabBarIcon:({ color }) => <Ionicons size={28} name='book' color={color} />}}/>
    <Tab.Screen name="index" component={Index} options={{tabBarIcon:({ color }) => <Ionicons size={28} name='home' color={color} />}}/>

    </Tab.Navigator>
    </View>

);
}
export default MyTabs;