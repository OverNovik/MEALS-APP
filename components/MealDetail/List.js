import React from "react";
import { StyleSheet, Text, View } from "react-native";

const List = ({ selectedItem, styleText, styleContainer }) => {
  return selectedItem.map((item) => (
    <View style={[styles.listItem, styleContainer]} key={item}>
      <Text style={[styles.textItem, styleText]}>{item}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  textItem: {
    fontSize: 18,
    textAlign: "center",
  },
});
