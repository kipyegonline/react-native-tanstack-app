import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AppImage from "./components/AppImage";
import Welcome from "./components/Welcome";
import LoginComponent from "./components/Login.component";
import SignUpComponent from "./components/SignUp.component";
import Home from "./screens/Home";
import Post from "./screens/Post";
export type RootStackParams = {
  Home: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  Carousel: undefined;
  Posts: undefined;
  Post: { id: string; title: string };
};
const Stack = createNativeStackNavigator<RootStackParams>();
export default function NavigationComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerTitle: "Home", headerShown: false }}
        />
        <Stack.Screen name="Carousel" component={Home} />
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
        <Stack.Screen
          name="Posts"
          component={Home}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Post"
          component={Post}
          //options={({ route }) => ({ titLe: route.params.title ,})}
          //options={{ headerShown: false, presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
