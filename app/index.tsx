import "expo-router/entry";
import { View, Text, Image, Linking } from "react-native";
import { Link } from "expo-router";
import { makerData } from "../maker/maker";
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
        data={makerData}
        renderItem={({ item, index }) => {
          return (
            <Link href={`${item.link}`}>
              <View style={{ width: "100%", flex: 1, flexDirection: "row", alignItems:'center' }}>
                <Text style={{fontSize: 18}}>{item.name}</Text>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 200, height: 50 }}
                  resizeMode="center"
                />
              </View>
            </Link>
          );
        }}
      />
    </View>
  );
}
