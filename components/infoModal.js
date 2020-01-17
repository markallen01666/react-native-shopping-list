// infoModal - Modal providing useful information to user
// M Allen - 2020

import React from "react";
import { View, StyleSheet, Button, Text, Modal } from "react-native";
import { Icon } from "react-native-elements";

const InfoModal = props => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.headline}>
              Welcome to the shopping list app
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.subhead}>Add an item to the list</Text>
            <Text>Click on the green button</Text>
            <View>
              <Icon
                type="font-awesome"
                name={"plus"}
                size={15}
                color="#44bd32"
                reverse={true}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.subhead}>Clear all items</Text>
            <Text>Click on the red button</Text>
            <View>
              <Icon
                type="font-awesome"
                name={"trash"}
                size={15}
                color="#c23616"
                reverse={true}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.subhead}>
              Mark an item in the list as having been bought
            </Text>
            <Text>Press the item in the list to strikethrough the text</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.subhead}>Delete an item from the list</Text>
            <Text>
              Press for a longer time on the item to delete it from list
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            color="#999"
            style={styles.button}
            title="CLOSE"
            onPress={props.onClose}
          />
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
    marginTop: 20
  },
  textContainer: {
    padding: 10,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  headline: {
    fontWeight: "bold",
    fontSize: 20
  },
  subhead: {
    fontWeight: "bold"
  }
});

export default InfoModal;
