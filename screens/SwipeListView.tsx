import React from "react";
import { StyleSheet, View } from "react-native";

import { SwipeList } from "../components/SwipeList";

export const SwipeListViewScreen = () => {
  return (
    <View style={styles.container}>
      <SwipeList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
