import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { roundButtonStyle } from "./style/ComponentStyle";

interface CloseButtonProps {
  icon: any;
}

interface CheckButtonProps {
  icon: any;
  onclickCreate: any;
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
  onclickCreate,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={roundButtonStyle.roundButton}
        onPress={onclickCreate}>
        <Text>{icon}</Text>
      </TouchableOpacity>
    </View>
  );
};
