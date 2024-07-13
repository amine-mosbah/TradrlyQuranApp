import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View ,Image} from "react-native";

export default function customSideBar(props: any) {
    return(
        <View style={{flex:1}}>
            
        <DrawerContentScrollView scrollEnabled={false}>
            <View style={{padding:30}}>
            <Image source={require('@/assets/images/SideBarLogo.png')} 
            style={{height:88,width:88,alignSelf:'center' }}></Image>
            </View>
            <DrawerItemList {...props} />     
        </DrawerContentScrollView>        
        

        </View>
    )
}
