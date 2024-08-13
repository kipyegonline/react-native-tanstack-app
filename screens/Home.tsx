import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../Navigation.component";
type Post = Record<string, any>;
let url = "https://jsonplaceholder.typicode.com/posts";
const fetchData = async () => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    return error;
  }
};
type Props = NativeStackScreenProps<RootStackParams>;
export default function Home({ navigation }: Props) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  const handlePress = (item: Post) => {
    return () => {
      navigation.navigate("Post", {
        id: JSON.stringify(item),
        title: item.title,
      });
    };
  };
  if (isLoading)
    return (
      <View style={styles.container}>
        <ActivityIndicator color="blue" size={48} />
      </View>
    );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        ItemSeparatorComponent={Separator}
        renderItem={({ item, index }) => (
          <PostsComponent item={item} index={index} press={handlePress(item)} />
        )}
      />
    </View>
  );
}
type PostComponentProps = { item: Post; press: () => void; index: number };
const PostsComponent = ({
  item,
  press = () => {},
  index,
}: PostComponentProps) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={press}>
      <Text>
        {index + 1}. {item.title}
      </Text>
    </TouchableOpacity>
  );
};
const Separator = () => {
  return <View style={{ borderTopWidth: 2, borderColor: "#ccc" }}></View>;
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  itemContainer: { padding: 10, marginBottom: 10 },
});
