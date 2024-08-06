import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import React from "react";
let img = require("../assets/Screenshot from 2019-11-24 23-54-27.png");
export default function AppImage() {
  const [cur, setCur] = React.useState(img);
  const handlePress = () => {
    let nextImage = require("../assets/vlcsnap-2019-11-25-23h17m55s186.png");
    setCur(nextImage);
  };
  const alertHim = () => {
    Alert.alert("Action", "Confirm Alert", [
      { text: "Accept", onPress: () => {} },
      { text: "Decline", onPress: () => {} },
    ]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The Hummingbird</Text>
      <Image source={cur} style={styles.image} />
      <View style={styles.btn}>
        <TouchableWithoutFeedback onPress={handlePress}>
          <Text>Change image</Text>
        </TouchableWithoutFeedback>
        <Button title="Alert" color="palevioletred" onPress={alertHim} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 18, fontWeight: "500" },
  image: { width: null, height: 280, paddingVertical: 15 },
  btn: {
    marginVertical: 10,
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "skyblue",
    color: "white",
  },
});
