import { Link } from "expo-router";
import { View, Text, Image } from "react-native";
import { lpData } from "../colors/lp";
type TlpData = typeof lpData[number];

export default function ColorsView({ item }: { item: TlpData }) {
  return (
    <Link href="/">
      <View style={{ flex: 1, width: "100%", flexDirection: 'row' }}>
        <Image
          source={{ uri: item.imagePath }}
          style={{ width: 100, height: 100 }}
        />
        <Text>{item.itemNameJa}</Text>
        <Text>{item.hexColors[1]}</Text>
      </View>
    </Link>
  );
}
