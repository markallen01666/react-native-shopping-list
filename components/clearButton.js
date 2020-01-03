// clearButton - Clear all list items
// M Allen - 2020

import React from "react";
import { View, StyleSheet, Button } from "react-native";

const ClearButton = props => {
  return (
    <View style={styles.clearButtonView}>
      <Button color="#cc2900" title="CLEAR ALL" onPress={props.onClearItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  clearButtonView: {
    marginTop: 5,
    marginBottom: 5,
  }
});

export default ClearButton;
