// listItem - single item display and functionality
// M Allen - 2020

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const listItem = props => {
  const [strikeState, setStrikeState] = useState(false);

  return (
    <TouchableOpacity
      onLongPress={props.onDelete.bind(this, props.id)}
      onPress={setStrikeState(currentState => !currentState)}
    >
      <View style={styles.listItem}>
        <Text
          style={
            strikeState ? styles.strikeItemText : styles.itemText
          }
        >
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#e6f2ff",
    borderColor: "#aaa",
    borderWidth: 1,
    borderStyle: "dotted"
  },
  itemText: {
    color: "#333",
    textAlign: "center"
  },
  strikeItemText: {
    textDecorationLine: "line-through",
    color: "#333",
    textAlign: "center"
  }
});

export default listItem;
