import { View ,Text,TouchableOpacity, ScrollView,Image} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./styles/sheikhStyles";
import { sheikhs } from "./data/sheikhs";
export default function Tertil() {


  return (
    <ScrollView style={{flex:1, flexDirection:'column'}}>
    <View style={styles.container}>
        {sheikhs.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={
              styles.button}
              >
            <Image source={item.image} style={styles.image}></Image>
            <Text style={styles.text}>{item.name} </Text>
          </TouchableOpacity>
        ))}
      </View>
      </ScrollView>
  );
}
