import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import { DATA } from "../utils";
import { CardProps, Card } from "./Card";

export const FlatListComponent = () => {
  const renderItem = ({ item }: { item: CardProps }) => (
    <Card id={item.id} image={item.image} title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
