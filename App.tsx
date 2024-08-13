import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar as SB } from "react-native";
import Welcome from "./components/Welcome";
import NavigationComponent from "./Navigation.component";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const client = new QueryClient({});

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <NavigationComponent />
      <StatusBar style="auto" />
    </QueryClientProvider>
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
