import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";

export default function Welcome() {
  return (
    <ImageBackground
      source={require("../assets/Screenshot from 2019-11-25 23-20-34.png")}
      style={styles.container}
    >
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </View>
      <Text>Welcome</Text>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  logoContainer: {},
  buttonContainer: { flex: 1, justifyContent: "flex-end" },
});
