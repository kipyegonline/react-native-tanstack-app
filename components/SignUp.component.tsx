import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";

export default function SignUpComponent() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Email</Text>
        <TextInput />
      </View>

      <View>
        <Text>Password</Text>
        <TextInput />
      </View>
      <View>
        <Text>Confirm password</Text>
        <TextInput />
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
  },
  btnText: { color: "white", textAlign: "center", fontSize: 14 },
  btn: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 10,
    backgroundColor: "magenta",
  },
});
