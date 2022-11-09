import "expo-router/entry";
import { View, Text, Image } from "react-native";
import { Link } from "expo-router";
import { makerData } from "../maker/maker";
import { FlashList } from "@shopify/flash-list";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

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
        estimatedItemSize={300}
        renderItem={({ item, index }) => {
          return (
            <Link href={`${item.link}`}>
              <View style={{ width: "100%", flex: 1, flexDirection: "row", alignItems:'center' }}>
                <Text style={{fontSize: 18}}>{item.name}</Text>
                <Image
                  source={item.image} 
                  // source={require('./images/logo/TAMIYA_logo.png')}
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
