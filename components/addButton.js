// addButton - Add a new list item
// M Allen - 2020

import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const AddButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Icon
        type="font-awesome"
        name={"plus"}
        size={30}
        color="#44bd32"
        reverse={true}
      />
    </TouchableOpacity>
  );
};

export default AddButton;
