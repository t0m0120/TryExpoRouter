import "expo-router/entry";
import { View, Text } from "react-native";
import { Link, useNavigation } from "expo-router";
import { lpData } from "../../../colors/lp";
import { FlashList } from "@shopify/flash-list";
import ColorsView from "../../../components/ColorsView";

export default function Index({ route }) {
  const number = route.params.number;

  const navigation = useNavigation();
  const lp = lpData.find((v) => v.number === number);

  navigation.setOptions({title: lp.itemNameJa})
  return (

    <View
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      {number}
    </View>
  );
}
