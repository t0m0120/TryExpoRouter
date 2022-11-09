import "expo-router/entry";
import { View, Text, } from "react-native";
import { Link } from "expo-router";
import { tamiyaGenreData } from "../../maker/brands/tamiya";
import { FlashList } from "@shopify/flash-list";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      <FlashList
        data={tamiyaGenreData}
        renderItem={({ item, index }) => {
          return (
            <Link href={`${item.link}`}>
              <View style={{ width: "100%", flex: 1, flexDirection: "row", alignItems:'center' }}>
                <Text style={{fontSize: 18}}>{item.name}</Text>
              </View>
            </Link>
          );
        }}
      />
    </View>
  );
}
