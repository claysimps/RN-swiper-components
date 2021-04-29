import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopTabsBar } from "../components/TopTabsBar";
import { Carousel } from "../screens/Carousel";
import { SwipeList } from "../screens/SwipeList";

export type TopTabParamList = {
  Carousel: undefined;
  SwipeList: undefined;
};

const { Navigator, Screen } = createMaterialTopTabNavigator<TopTabParamList>();

export const TopTabNavigator = () => (
  <Navigator
    tabBar={(props) => <TopTabsBar {...props} />}
    initialRouteName="Carousel">
    <Screen
      name="Carousel"
      component={Carousel}
      options={{ title: "Carousel" }}
    />
    <Screen
      name="SwipeList"
      component={SwipeList}
      options={{ title: "Swipe List" }}
    />
  </Navigator>
);
