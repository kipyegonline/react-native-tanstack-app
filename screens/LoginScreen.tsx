import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInputComponent,
  Button,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
export default function LoginScreen() {
  const handleLogin = () => {};
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/vlcsnap-2019-11-25-23h00m07s607.png")}
        style={styles.logo}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {}}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit }) => {
          return (
            <>
              <TextInputComponent
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="Enter email address"
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
              />
              <TextInputComponent
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                textContentType="password"
                onChangeText={handleChange("password")}
              />
              <Button title="Login" onPress={() => handleSubmit()} />
            </>
          );
        }}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 15 },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
