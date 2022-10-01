import "expo-router/entry";
import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 44, fontWeight: "bold" }}>Home</Text>
      <Link href="/test">Go to TestPage</Link>
    </View>
  );
}
