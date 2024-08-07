import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar as SB } from "react-native";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome />
      <StatusBar style="auto" />
    </View>
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
