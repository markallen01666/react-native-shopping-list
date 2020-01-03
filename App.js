// React Native Mobile Shopping List app 
// Mark Allen - 2020

import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import ItemAdd from "./components/itemAdd";
import ListItem from "./components/listItem";
import ClearButton from "./components/clearButton";

export default function App() {
  const [ListItems, setListItems] = useState([]);

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
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Shopping List</Text>
      <Text style={styles.instructions}>(short press on item to strikethrough, long press on item to remove it)</Text>
      <ItemAdd onAddItem={addItemHandler} />
      <ClearButton onClearItems={clearItemsHandler} />
      <View style={styles.itemlist}>
        <FlatList
          data={ListItems}
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
    padding: 30
  },
  itemlist: {
    marginVertical: 20
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#0066cc"
  },
  instructions: {
    textAlign: "center",
    fontStyle: "italic",
    color: "#777"
  }
});
