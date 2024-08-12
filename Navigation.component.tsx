import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AppImage from "./components/AppImage";
import Welcome from "./components/Welcome";
export type RootStackParams = { Home: undefined; Welcome: undefined };
const Stack = createNativeStackNavigator<RootStackParams>();
export default function NavigationComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="Home"
          component={AppImage}
          options={{ headerTitle: "Home", headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
