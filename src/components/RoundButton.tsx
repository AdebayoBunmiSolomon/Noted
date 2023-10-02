import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { roundButtonStyle } from "./style/ComponentStyle";

interface CloseButtonProps {
  icon: any;
  onPress: any;
}

interface CheckButtonProps {
  icon: any;
  onPress: any;
}

export const CloseButton: React.FunctionComponent<CloseButtonProps> = ({
  icon,
  onPress,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={[roundButtonStyle.roundButton, { backgroundColor: "crimson" }]}
        onPress={onPress}>
        <Text>{icon}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const CheckButton: React.FunctionComponent<CheckButtonProps> = ({
  icon,
  onPress,
}) => {
  return (
    <View>
      <TouchableOpacity style={roundButtonStyle.roundButton} onPress={onPress}>
        <Text>{icon}</Text>
      </TouchableOpacity>
    </View>
  );
};
