import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../Navigation.component";
type Props = NativeStackScreenProps<RootStackParams, "Login">;

export default function LoginComponent({ navigation }: Props) {
  const handleLogin = () => {
    navigation.navigate("Posts");
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Text style={styles.title}>Welcome to Spring Valley</Text>
      </View>

      <View style={styles.emailContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          keyboardType="email-address"
          style={styles.textInput}
          placeholder="Enter email/username"
        />
      </View>
      <View style={styles.passwordContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          secureTextEntry
          style={styles.textInput}
          placeholder="Enter password"
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.logintext}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp");
        }}
        style={styles.signupLink}
      >
        <Text style={{ color: "blue" }}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    //backgroundColor: "#ccc",
  },
  title: {
    fontWeight: "700",
    fontSize: 24,
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  emailContainer: { width: "100%", marginBottom: 20 },
  textInput: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  inputLabel: { marginBottom: 10, fontWeight: "600" },
  passwordContainer: { width: "100%", marginBottom: 20 },
  loginBtn: {
    backgroundColor: "magenta",
    width: "100%",
    padding: 10,
    borderRadius: 8,
  },
  logintext: { color: "#fff", textAlign: "center" },
  signupLink: { marginTop: 10 },
});
