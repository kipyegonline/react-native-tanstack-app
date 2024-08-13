import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../Navigation.component";

type Props = NativeStackScreenProps<RootStackParams, "Post">;
export default function Post({ route, navigation }: Props) {
  console.log(route);
  React.useEffect(() => {
    navigation.setOptions({ title: route.params.title });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route?.params?.title.slice(0, 15)}</Text>
      <Text style={styles.body}>{JSON.parse(route.params.id).body}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    borderBottomWidth: 1,
    borderColor: "1e1e1e",
  },
  body: { textAlign: "left" },
});
