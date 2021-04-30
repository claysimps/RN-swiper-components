import { StackNavigationProp } from "@react-navigation/stack";
import React, { useRef } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Pressable,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { RootStackParamList } from "../types";

const data = [
  {
    title: "Hi!",
    text: "Welcome to my swipe components guide",
    image: require("../assets/images/1.jpg"),
    bg: "#59b2ab",
  },
  {
    title: "Coming up...",
    text: "Lot's of cool libraries!",
    image: require("../assets/images/2.jpg"),
    bg: "#febe29",
  },
  {
    title: "Guess what!?",
    text: "This is the first swipe component!",
    image: require("../assets/images/3.jpg"),
    bg: "#22bcb5",
  },
  {
    title: "Time to gimme your data",
    text: "Joking!",
    image: require("../assets/images/4.jpg"),
    bg: "#febe29",
  },
];

type Item = typeof data[0];

type RenderPaginationProps = {
  data: any[];
  activeIndex: number;
  slider: AppIntroSlider | null;
  onIntroCompleted: () => void;
};

type IntroNavigationProps = StackNavigationProp<RootStackParamList, "Intro">;

interface IntroProps {
  navigation: IntroNavigationProps;
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
  title: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  paginationContainer: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    marginHorizontal: 24,
  },
  button: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 8,
    borderRadius: 24,
    backgroundColor: "#1cb278",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
});

const renderItem = ({ item }: { item: Item }) => (
  <View
    style={[
      styles.slide,
      {
        backgroundColor: item.bg,
      },
    ]}>
    <Text style={styles.title}>{item.title}</Text>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.text}>{item.text}</Text>
  </View>
);

const RenderPagination = ({
  activeIndex,
  slider,
  data,
  onIntroCompleted,
}: RenderPaginationProps) => {
  const handleIntroCompleted = () => {
    onIntroCompleted();
  };
  return (
    <View style={styles.paginationContainer}>
      <SafeAreaView>
        <View style={styles.paginationDots}>
          {data.length > 1 &&
            data.map((_, i) => (
              <Pressable
                key={i}
                style={[
                  styles.dot,
                  i === activeIndex
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "rgba(0, 0, 0, 0.2)" },
                ]}
                onPress={() => slider?.goToSlide(i, true)}
              />
            ))}
        </View>

        {activeIndex === data.length - 1 && (
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={handleIntroCompleted}
              style={[styles.button, { backgroundColor: "#023e3f" }]}>
              <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
            <Pressable onPress={handleIntroCompleted} style={styles.button}>
              <Text style={styles.buttonText}>Sign up</Text>
            </Pressable>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export const Intro = ({ navigation }: IntroProps) => {
  const sliderEl = useRef(null);

  const keyExtractor = (item: Item) => item.title;

  const onIntroCompleted = () => {
    navigation.navigate("Root");
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderPagination={(activeIndex) => (
          <RenderPagination
            data={data}
            activeIndex={activeIndex}
            slider={sliderEl.current}
            onIntroCompleted={onIntroCompleted}
          />
        )}
        data={data}
        ref={sliderEl}
      />
    </View>
  );
};
