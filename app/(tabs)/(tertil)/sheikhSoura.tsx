import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import SurahStarIcon from "@/components/surahStarIcon";
import { sheikhs } from "../data/sheikhs";

export default function SheikhSoura() {
  const { name, image } = useLocalSearchParams();
  const sheikh = sheikhs.find(s => s.name === name);

  if (!sheikh) {
    return <Text>Sheikh not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={image as any} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
      <View style={{height:30}}></View>
      <FlatList
        data={sheikh.surah}
        renderItem={({ item }) => <SurahStarIcon number={item.id} name={item.name}/>}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    top:20
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    paddingTop: 30,
  },
  separator: {
    height: 1,
    width: '85%',
    backgroundColor: '#CED0CE',
    alignSelf: 'center',
  },
});
