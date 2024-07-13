import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#34495E",
        height: 120,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        color: "#F1C40F",
        fontSize: 20,
        fontWeight: '600',
        textAlign: "center",
        marginBottom: -40,
      },
      menu: {
        position: "absolute",
        left: 10,
        top: 67,
      },
      search: {
        position: "absolute",
        right: 10,
        top: 68,
      },
})