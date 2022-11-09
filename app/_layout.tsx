import { Stack, Tabs } from "expo-router";
import { NativeBaseProvider } from "native-base";

export default function Layout() {
  return (
    <NativeBaseProvider>
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "メーカー一覧" }} />
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
          title: 'TAMIYA ラッカー塗料',
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
