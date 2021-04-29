import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopTabsBar } from "../components/TopTabsBar";
import { DefaultCarousel } from "../screens/DefaultCarousel";
import { TinderCarousel } from "../screens/TinderCarousel";
import { StackCarousel } from "../screens/StackCarousel";

export type TopTabParamList = {
  Default: undefined;
  Tinder: undefined;
  Stack: undefined;
};

const { Navigator, Screen } = createMaterialTopTabNavigator<TopTabParamList>();

export const TopTabNavigator = () => (
  <Navigator
    tabBar={(props) => <TopTabsBar {...props} />}
    initialRouteName="Default">
    <Screen
      name="Default"
      component={DefaultCarousel}
      options={{ title: "Default " }}
    />
    <Screen
      name="Tinder"
      component={TinderCarousel}
      options={{ title: "Tinder" }}
    />
    <Screen
      name="Stack"
      component={StackCarousel}
      options={{ title: "Stack" }}
    />
  </Navigator>
);
