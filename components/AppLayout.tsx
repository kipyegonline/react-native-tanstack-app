import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");
export default function AppLayout() {
  const handleLayout = () => {
    console.log("layout changes......");
  };
  return (
    <View style={styles.container} onLayout={handleLayout}>
      <View style={styles.top}>
        <Text>This is the top container</Text>
      </View>
      <View style={styles.bottom}>
        <Text>AppLayout</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", width },
  top: { flex: 2, backgroundColor: "cyan" },
  bottom: { flex: 1, backgroundColor: "magenta" },
});
