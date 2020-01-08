// tempButton - Added to play with 'button' styling through <View />
// M Allen - 2020

import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const TempButton = props => {
  return (
    <TouchableOpacity
    onPress={props.onPress} 
    >
    <Icon type='font-awesome' name={"info"} size={30} color="#192a56" reverse={true} />
    </TouchableOpacity>
  );
};

export default TempButton;
