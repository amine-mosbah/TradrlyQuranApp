import { Stack } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Drawer } from 'expo-router/drawer';
import { DrawerActions, useNavigation } from "@react-navigation/native";
import customSideBar from "@/components/customSideBar";
import { styles } from "./layoutStyles";

export default function _layout() {
  const navigation = useNavigation();

  const toggleDrawer = ()=> {

    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  const items = [
    {name: 'index', text: 'صـفحـة رئـيسـية', icon:'home', rightIcon:'settings-outline', swipe:true, navIcon:'menu'},
    { name: 'kiraa', text: 'قـراءة', icon:'book',  rightIcon:'search' , swipe:false,navIcon:'chevron-back'},
    { name: 'tertil', text: 'تـرتيل', icon: 'headset', rightIcon:'search',swipe:false,navIcon:'chevron-back' },
    { name: 'adhkar', text: 'أذكـار', icon: 'reader', rightIcon:'search',swipe:false,navIcon:'chevron-back' },
    { name: 'prayerTime', text: 'مواعيد الصلاة', icon: 'time', rightIcon:'search' ,swipe:false,navIcon:'chevron-back'},
    { name: 'forum', text: 'منـتدى التـفاعـل ', icon: 'people', rightIcon:'search',swipe:false,navIcon:'chevron-back' },
  ];


  
  return (
    <Drawer drawerContent={customSideBar}>
      {items.map((item, index) => (
      <Drawer.Screen key={index} name={item.name} options={{
        swipeEnabled: item.swipe,
        drawerLabel: item.text,
        drawerLabelStyle:{textAlign:'right', fontSize:17},
        drawerType:'front',
        drawerIcon:({size,color}) =>(
          <Ionicons name={item.icon as any} size={size} color={color}/>
        ),
        drawerStyle:{backgroundColor:'#2C3E50'},
        drawerActiveBackgroundColor:'#34495E',
        drawerActiveTintColor:'#FFF',
        drawerInactiveTintColor:'#FFF',
        header: () => (
          <View style={styles.container}>
            <Text style={styles.text}> {item.text}</Text>
            <TouchableOpacity
              style={styles.menu}
              onPress={toggleDrawer}
            >
              <Ionicons name={item.navIcon as any} size={30} color='#F1C40F' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.search}>
              <Ionicons name={item.rightIcon as any} size={27} color='#F1C40F' />
            </TouchableOpacity>
          </View>
        )
      }}/>))}
    </Drawer>
  );
}

