import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { icons } from "@/constants";

const TabIcon = () => (
  <View>
    <View>
      <Image />
    </View>
  </View>
);

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
        }}
      />
    </Tabs>
  );
}
