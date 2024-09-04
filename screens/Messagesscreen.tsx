import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function MessagesScreen() {
  return (
    <FlatList
      data={[]}
      keyExtractor={({ item }: { item: Record<string, string | number> }) =>
        item?.id + ""
      }
      renderItem={({ item, index }) => <Text>{index}</Text>}
    />
  );
}
const styles = StyleSheet.create({});
