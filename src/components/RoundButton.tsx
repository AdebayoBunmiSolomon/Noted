import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { roundButtonStyle } from "./style/ComponentStyle";

interface CloseButtonProps {
  icon: any;
}

interface CheckButtonProps {
  icon: any;
}

export const CloseButton: React.FunctionComponent<CloseButtonProps> = ({
  icon,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={[roundButtonStyle.roundButton, { backgroundColor: "crimson" }]}>
        <Text>{icon}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const CheckButton: React.FunctionComponent<CheckButtonProps> = ({
  icon,
}) => {
  return (
    <View>
      <TouchableOpacity style={roundButtonStyle.roundButton}>
        <Text>{icon}</Text>
      </TouchableOpacity>
    </View>
  );
};
