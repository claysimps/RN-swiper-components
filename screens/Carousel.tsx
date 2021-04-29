import * as React from "react";
import { StyleSheet, Text } from "react-native";

import { View } from "../components/Themed";

export const Carousel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <Text>Swipe left to go to the next tab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    marginVertical: 5,
    height: 30,
    width: "80%",
  },
});
