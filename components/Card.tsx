import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { DATA } from "../utils";

export type CardProps = typeof DATA[0];

export const Card = ({ title, image, id }: CardProps) => (
  <View key={id} style={styles.container}>
    <View key={id} style={styles.item}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  item: {
    backgroundColor: "#2dbded",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 200,
    width: 250,
  },
  title: {
    fontSize: 18,
  },
  image: {
    flex: 1,
  },
});
