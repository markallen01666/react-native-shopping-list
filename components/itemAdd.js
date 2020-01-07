// itemAdd - Add new Shopping List items
// M Allen 2020

import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const todoAdd = props => {
  const [enteredItem, setEnteredItem] = useState("");

  const todoFieldHandler = enteredText => {
    setEnteredItem(enteredText);
  };

  const todoAddHandler = () => {
    props.onAddItem(enteredItem);
    setEnteredItem("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        width="100%"
        placeholder="Enter item"
        style={styles.input}
        onChangeText={todoFieldHandler}
        value={enteredItem}
        onSubmitEditing={()=>{
          todoAddHandler();
        }}
      />
      <Button color="#0066cc" title="ADD" onPress={todoAddHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 5
  },
  input: {
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10
  }
});

export default todoAdd;
