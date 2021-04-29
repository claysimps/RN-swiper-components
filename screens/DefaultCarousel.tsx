import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { CarouselComponent } from "../components/Carousel";

import { View } from "../components/Themed";

export const DefaultCarousel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.separator}>
        <Text style={styles.text}>Swipe left to go to the next tab</Text>
      </View>
      <CarouselComponent layout="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rebeccapurple",
  },
  separator: {
    width: "100%",
    height: 150,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});
