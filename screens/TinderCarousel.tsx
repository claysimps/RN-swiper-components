import React from "react";
import { StyleSheet, Text } from "react-native";
import { CarouselComponent } from "../components/Carousel";

import { View } from "../components/Themed";

export const TinderCarousel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.separator}>
        <Text style={styles.text}>Swipe left or right</Text>
      </View>
      <CarouselComponent layout="tinder" />
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
