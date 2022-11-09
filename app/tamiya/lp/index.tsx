import "expo-router/entry";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { lpData } from "../../../colors/lp";
import { FlashList } from "@shopify/flash-list";
import ColorsView from "../../../components/ColorsView";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      <FlashList
        data={lpData}
        renderItem={({ item, index }) => {
          return <ColorsView item={item} key={index} />;
        }}
      />
    </View>
  );
}
