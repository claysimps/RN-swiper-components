import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import Animated from "react-native-reanimated";
import { SwipeListView } from "react-native-swipe-list-view";

import { DATA } from "../utils";

const initialList = DATA.map((data, index) => ({ ...data, key: `${index}` }));

const rowSwipeAnimatedValues: any = {};
initialList.forEach((_, i) => {
  rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
});

type Item = typeof initialList[0];

export const SwipeList = () => {
  const [listData, setListData] = useState(initialList);

  const renderItem = ({ item }: { item: Item }) => (
    <TouchableHighlight
      onPress={() => console.log("You touched me")}
      style={styles.rowFront}
      underlayColor={"#AAA"}>
      <View style={styles.item}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.text}>
          image: {item.key} {item.title}. swipe left or right
        </Text>
      </View>
    </TouchableHighlight>
  );

  const closeRow = (rowMap: any, rowKey: string) => {
    // console.log("this is the rowMap: ", rowMap);
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap: Map<string, Object>, rowKey: string) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const alertRow = (rowMap: Map<string, Object>, rowKey: string) => {
    closeRow(rowMap, rowKey);
    const indexOfFilm: number = listData.findIndex(
      (item) => item.key === rowKey
    );
    Alert.alert("do something else with this item:", listData[indexOfFilm].key);
  };

  const onRowDidOpen = (rowKey: string) => {
    // console.log("This row opened", rowKey);
  };

  const onSwipeValueChange = ({
    key,
    value,
  }: {
    key: string;
    value: number;
  }) => {
    rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  };

  const renderHiddenItem = ({ item }: { item: Item }, rowMap: any) => (
    <View style={styles.rowBack}>
      <TouchableOpacity onPress={() => alertRow(rowMap, item.key)}>
        <Text>Click</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => closeRow(rowMap, item.key)}>
        <Text style={styles.backTextWhite}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, item.key)}>
        <Animated.View
          style={[
            styles.trash,
            {
              transform: [
                {
                  scale: rowSwipeAnimatedValues[item.key].interpolate({
                    inputRange: [45, 90],
                    outputRange: [0, 1],
                    extrapolate: "clamp",
                  }),
                },
              ],
            },
          ]}>
          <Image
            source={require("../assets/images/trash.png")}
            style={styles.trash}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
        onSwipeValueChange={onSwipeValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: "blue",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
  trash: {
    height: 25,
    width: 25,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
  },
  image: {
    flex: 1,
    alignContent: "flex-start",
    height: 40,
    width: 50,
  },
  text: {
    flex: 4,
    paddingLeft: 10,
  },
});
