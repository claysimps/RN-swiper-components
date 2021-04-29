import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import React, { FC } from "react";
import { Pressable, View } from "react-native";
import Animated from "react-native-reanimated";

interface TopTabsBarProps extends MaterialTopTabBarProps {}

export const TopTabsBar = ({
  state,
  descriptors,
  navigation,
  position,
}: TopTabsBarProps) => (
  <View
    style={{
      flexDirection: "row",
    }}>
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const label = options.title !== undefined ? options.title : route.name;
      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: "tabPress",
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: "tabLongPress",
          target: route.key,
        });
      };
      const inputRange = state.routes.map((_: any, i: number) => i);
      const opacity = Animated.interpolateNode(position, {
        inputRange,
        outputRange: inputRange.map((i: number) => (i === index ? 1 : 0.2)),
      });

      return (
        <Pressable
          style={{
            flex: 1,
            padding: 10,
          }}
          key={index}
          onPress={onPress}
          onLongPress={onLongPress}>
          <Animated.Text style={{ opacity, textAlign: "center" }}>
            {label}
          </Animated.Text>
        </Pressable>
      );
    })}
  </View>
);
