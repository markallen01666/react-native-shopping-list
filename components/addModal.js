// itemAdd - Add new Shopping List items
// M Allen 2020

import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Modal } from "react-native";
import { Icon } from "react-native-elements";

const AddModal = props => {
  const [enteredItem, setEnteredItem] = useState("");

  const addFieldHandler = enteredText => {
    setEnteredItem(enteredText);
  };
  const itemAddHandler = () => {
    props.onAddItem(enteredItem);
    setEnteredItem("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.headline}>Add new items to your shopping list</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            width="100%"
            placeholder="Enter item"
            style={styles.input}
            onChangeText={addFieldHandler}
            value={enteredItem}
            onSubmitEditing={() => {
              itemAddHandler();
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text>Add items to list. Close when finished</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color="#999"
              style={styles.button}
              title="CLOSE"
              onPress={props.onClose}
            />
          </View>
          <View style={styles.button}>
            <Button
              color="#44bd32"
              style={styles.button}
              title="ADD"
              onPress={itemAddHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "#dcdde1"
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 5,
    width: "80%"
  },
  input: {
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    width: "100%"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  button: {
    margin: 10,
    width: "30%"
  },
  textContainer: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  headline: {
    fontWeight: "bold",
    fontSize: 20
  }
});

export default AddModal;
