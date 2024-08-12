import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AppImage from "./components/AppImage";
import Welcome from "./components/Welcome";
import LoginComponent from "./components/Login.component";
import SignUpComponent from "./components/SignUp.component";
export type RootStackParams = {
  Home: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
};
const Stack = createNativeStackNavigator<RootStackParams>();
export default function NavigationComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerTitle: "Home" }}
        />
        <Stack.Screen
          name="Login"
          component={LoginComponent}
          options={{ headerTitle: "Spring Valley Login " }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpComponent}
          options={{ headerTitle: "Sign up" }}
        />
        <Stack.Screen
          name="Home"
          component={AppImage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
