import * as React from "react";
import { StyleSheet, Text } from "react-native";

import { View } from "../components/Themed";

export const SwipeList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <Text style={styles.text}>Swipe right to go back to the first tab</Text>
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
  text: {
    textAlign: "center",
  },
});
