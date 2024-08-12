import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar as SB } from "react-native";
import Welcome from "./components/Welcome";
import NavigationComponent from "./Navigation.component";

export default function App() {
  return (
    <>
      <NavigationComponent />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: SB.currentHeight,
    //alignItems: "center",
    //justifyContent: "center",
  },
});
