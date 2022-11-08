import { Stack, Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "First" }} />
      <Tabs.Screen name="test" options={{ title: "Second" }} />
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
  );
}
