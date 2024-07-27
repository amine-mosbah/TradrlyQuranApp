import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginHorizontal: 20,
      padding: 15,
      marginTop:20
    },
    button: {
      marginBottom: 45,
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },

    text: {
      fontWeight: '400',
      fontSize: 16,
      textAlign: 'center',
      top:7
    },
    image:{
      height:130, 
      width:130,
      borderRadius: 100,
    },

    
  });