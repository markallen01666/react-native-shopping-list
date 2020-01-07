// tempButton - Added to play with 'button' styling through <View />
// M Allen - 2020

import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const TempButton = props => {
  return (
    <TouchableOpacity
    onPress={() => alert("Bang")} onLongPress={() => alert("Boom")} 
    >
    <Icon name={"chevron-right"} size={30} color="#0a0" reverse={true} />
    </TouchableOpacity>
  );
};

export default TempButton;
