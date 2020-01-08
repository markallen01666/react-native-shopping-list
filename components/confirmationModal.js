// confirmationModal - confirm action
// M Allen - 2020

import React from "react";
import { View, StyleSheet, Button, Text, Modal } from "react-native";
import { Icon } from "react-native-elements";

const ConfirmationModal = props => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.headline}>Are you sure?</Text>
          </View>
          <View>
            <Icon
              type="font-awesome"
              name={"trash"}
              size={15}
              color="#c23616"
              reverse={true}
            />
          </View>
          <View style={styles.textContainer}>
            <Text>This will delete all items from the list.</Text>
            <Text>Are you sure that you want to do this?</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color="#999"
              style={styles.button}
              title="CANCEL"
              onPress={props.onClose}
            />
          </View>
          <View style={styles.button}>
            <Button
              color="#c23616"
              style={styles.button}
              title="DELETE"
              onPress={props.onClearItems}
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
  infoContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  headline: {
    fontWeight: "bold",
    fontSize: 20
  },
  button: {
    margin: 10,
    width: '30%'
  }
});

export default ConfirmationModal;
