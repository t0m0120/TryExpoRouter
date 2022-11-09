import { Stack, Tabs } from "expo-router";
import { HamburgerIcon, Menu, NativeBaseProvider } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <NativeBaseProvider>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "塗料リスト",
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="spray"
                size={24}
                color={focused ? "#007aff" : "#8e8e8f"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="list"
          options={{
            title: "所持リスト",
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                name="list-status"
                size={24}
                color={focused ? "#007aff" : "#8e8e8f"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="colorcheck"
          options={{
            title: "カラーチェック",
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                name="palette"
                size={24}
                color={focused ? "#007aff" : "#8e8e8f"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="tamiya"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          name="tamiya/lp/index"
          options={{
            title: "TAMIYA ラッカー塗料",
            href: null,
          }}
        />
        <Tabs.Screen
          name="tamiya/index"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="tamiya/lp/[number]"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="_sitemap"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="[...404]"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
      </Tabs>
    </NativeBaseProvider>
  );
}
