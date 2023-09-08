import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { style } from "./Styles";

const Settings = () => {
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text>Welcome to Settings view</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
