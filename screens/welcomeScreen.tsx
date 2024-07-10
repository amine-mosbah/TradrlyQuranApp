import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
export default function welcomeScreen() {
  return (
  <View style={Styles.background}>
    <Image source={require('../assets/images/welcomeLogo.png')} />
    </View>
  );
}
const Styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#34495E",
  }
});

