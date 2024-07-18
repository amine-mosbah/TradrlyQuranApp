import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: 15,
      marginTop:-10
    },
    button: {
      width: '48%',
      marginBottom: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    lastButton: {
      width: '100%',
    },
    lastButtonText: {
      fontWeight: '400',
      fontSize: 28,
      textAlign: 'left',
      top:60,
      left:25
    },
    lastButtonImage: {
      height: 99,
      width: 99,
      alignSelf:'flex-end',
      marginRight:90,
      top:0
    },
    gradient: {
      borderRadius: 23,
    },
    insideButton: {
      height: 163,
      width: '100%',
    },
    text: {
      fontWeight: '400',
      fontSize: 28,
      textAlign: 'left',
      top: 9,
      left: 13,
    },
    image: {
      height: 99,
      width: 99,
      top: 10,
      left: 48,
    },
    separator: {
      height: 2,
      width: '100%',
      backgroundColor: '#CED0CE',
      marginVertical: 25,
    },
    
  });