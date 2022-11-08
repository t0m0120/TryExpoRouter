import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        color: "#0e0e0e",
        backgroundColor: "#fcee0a",
      }}
    >
      <Text style={{ fontSize: 44, fontWeight: "bold" }}>Test</Text>
      <Link href="/">Back Home</Link>
    </View>
  );
}
