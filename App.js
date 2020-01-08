// React Native Mobile Shopping List app
// Mark Allen - 2020

import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

// import components
import ListItem from "./components/listItem";
import AddButton from "./components/addButton";
import InfoButton from "./components/infoButton";
import ClearAllButton from "./components/clearAllButton";
import InfoModal from "./components/infoModal";
import ConfirmationModal from "./components/confirmationModal";
import AddModal from './components/addModal';

export default function App() {
  // state hooks
  const [listItems, setListItems] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  // state hook handlers
  const addItemHandler = itemTitle => {
    setListItems(currentItems => [
      ...currentItems,
      { id: new Date().getTime().toString(), value: itemTitle }
    ]);
  };
  const removeItemHandler = itemId => {
    setListItems(currentItems => {
      return currentItems.filter(item => item.id !== itemId);
    });
  };
  const clearItemsHandler = () => {
    setListItems(currentItems => []);
    confirmationModalHandler();
  };
  const infoModalHandler = () => {
    setShowInfo(currentShowInfo => !currentShowInfo)
  }
  const confirmationModalHandler = () => {
    setShowConfirmation(currentShowConfirmation => !currentShowConfirmation)
  }
  const addModalHandler = () => {
    setShowAdd(currentShowAdd => !currentShowAdd)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.controls}>
        <AddButton onPress={addModalHandler} />
        <InfoButton onPress={infoModalHandler} />
        <ClearAllButton onPress={confirmationModalHandler} />
      </View>
      <InfoModal visible={showInfo} onClose={infoModalHandler} />
      <ConfirmationModal visible={showConfirmation} onClose={confirmationModalHandler} onClearItems={clearItemsHandler} />
      <AddModal visible={showAdd} onClose={addModalHandler} onAddItem={addItemHandler} />
      <Text style={styles.title}>Shopping List</Text>
      <View style={styles.itemlist}>
        <FlatList
          data={listItems}
          renderItem={itemData => (
            <ListItem
              id={itemData.item.id}
              title={itemData.item.value}
              onDelete={removeItemHandler}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:1,
    padding: 30,
    backgroundColor: "#dcdde1"
  },
  itemlist: {
    marginVertical: 20
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "#2f3640",
    marginTop: 20
  },
  instructions: {
    textAlign: "center",
    fontStyle: "italic",
    color: "#777"
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
