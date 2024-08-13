import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../Navigation.component";

type Props = NativeStackScreenProps<RootStackParams, "SignUp">;

export default function SignUpComponent({ navigation }: Props) {
  const handleSignUp = () => {};
  return (
    <View style={styles.container}>
      <View style={{ paddingVertical: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "500" }}>
          Welcome to Spring Valley
        </Text>
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Enter email address"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Enter password"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Confirm password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Confirm password"
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
        <Text style={styles.btnText}>Sign up</Text>
      </TouchableOpacity>
      <View style={{ alignItems: "flex-start", width: "100%" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.loginLink}
        >
          <Text style={{ color: "blue", textAlign: "left", fontSize: 16 }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "purple",
    padding: 20,
  },
  formGroup: { paddingVertical: 10, width: "100%" },
  label: { fontSize: 16, fontWeight: "500", paddingBottom: 5, paddingLeft: 4 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 5,
    paddingLeft: 5,
  },
  btnText: { color: "white", textAlign: "center", fontSize: 14 },
  btn: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 8,
    // marginHorizontal: 10,
    backgroundColor: "magenta",
  },
  loginLink: { marginTop: 5, paddingVertical: 5 },
});
