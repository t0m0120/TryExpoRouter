import "expo-router/entry";
import { Image, Dimensions, ScrollViewBase } from "react-native";
import { useNavigation } from "expo-router";
import { Container, Heading, ScrollView, Text, View } from "native-base";
import { lpData } from "../../../colors/lp";

export default function Index({ route }) {
  const number = route.params.number;

  const navigation = useNavigation();
  const lp = lpData.find((v) => v.number === number);
  const screenWidth = Dimensions.get("window").width;
  console.log(
    "%cMyProject%cline:14%cscreenWidth",
    "color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
    "color:#fff;background:#1f3c88;padding:3px;border-radius:2px",
    "color:#fff;background:rgb(34, 8, 7);padding:3px;border-radius:2px",
    screenWidth
  );

  navigation.setOptions({ title: `${lp.itemNameJa}` });
  return (
    <ScrollView style={{ padding: 15 }}>
      <Heading size="xs" marginBottom="1" fontWeight={400}>
        {`ラッカー塗料
${lp.itemSerial}`}
      </Heading>
      <Heading size="lg" marginBottom="4">
        {lp.itemNameJa}
      </Heading>

      <Image
        source={{
          uri: `${lp.imagelink}`,
        }}
        resizeMode="contain"
        style={{ width: 100, height: 100 }}
        // style={{ width: `${screenWidth}`, height: 200, position: 'relative' }}
      />
      <Text>{lp.hexColors[1]}</Text>
      <Text>定価: {lp.itemPrice}</Text>
    </ScrollView>
  );
}
