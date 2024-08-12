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
      //resizeMode="contain"
    >
      <View style={{ position: "absolute", top: "40%" }}>
        <Text style={styles.welcome}>Welcome to the Spring Valley</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginBtn} activeOpacity={0.8}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signBtn} activeOpacity={0.8}>
          <Text style={styles.btnText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 20, backgroundColor: "rgba(0,0,0,.9)",justifyContent:"center",alignItems:"center" },
  welcome: {
    color: "white",
    fontWeight: "700",
    fontSize: 44,
    textAlign: "center",
    textTransform: "capitalize",
    paddingHorizontal: 4,
  },
  logoContainer: {},
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    gap: 10,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  loginBtn: {
    width: "100%",
    borderRadius: 12,
    padding: 14,
    backgroundColor: "hotpink",
  },
  signBtn: {
    width: "100%",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "hotpink",
  },
  btnText: { color: "white", fontWeight: "700", textAlign: "center" },
});
