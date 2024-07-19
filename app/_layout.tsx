import { Stack, Tabs } from "expo-router";
const _layout = () => {
  return (
<Stack >
<Stack.Screen  name="index"  />

  <Stack.Screen  name="tabNavigation"  />

      <Stack.Screen  name="kiraa" />

      <Stack.Screen  name="tertil" />

      <Stack.Screen  name="adhkar" />
      <Stack.Screen  name="prayerTime" />
      <Stack.Screen  name="forum" />
    </Stack>
  );
}
export default _layout;

