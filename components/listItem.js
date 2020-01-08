// listItem - single item display and functionality
// M Allen - 2020

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const listItem = props => {
  const [strikeState, setStrikeState] = useState(false);

  return (
    <TouchableOpacity
      onLongPress={props.onDelete.bind(this, props.id)}
      onPress={() => setStrikeState(!strikeState)}
    >
      <View style={styles.listItem}>
        <Text
          style={
            strikeState ? styles.strikeItemText : styles.itemText
          }
        >
          <Text>
          {props.title}
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#fff",
    borderColor: "#aaa",
    borderWidth: 1,
    borderStyle: "dotted"
  },
  itemText: {
    color: "#333",
    textAlign: "center",
    fontWeight: 'bold'
  },
  strikeItemText: {
    textDecorationLine: "line-through",
    color: "#cc2900",
    textAlign: "center",
    fontWeight: 'normal'
  }
});

export default listItem;
