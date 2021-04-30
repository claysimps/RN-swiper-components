import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import { DATA } from "../utils";

type ItemProps = typeof DATA[0];

const Item = ({ title, image, id }: ItemProps) => (
  <View key={id} style={styles.item}>
    <Image style={styles.image} source={{ uri: image }} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

export const FlatListComponent = () => {
  const renderItem = ({ item }: { item: ItemProps }) => (
    <Item id={item.id} image={item.image} title={item.title} />
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
  item: {
    backgroundColor: "#2dbded",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 200,
    width: 150,
  },
  title: {
    fontSize: 18,
  },
  image: {
    flex: 1,
  },
});
