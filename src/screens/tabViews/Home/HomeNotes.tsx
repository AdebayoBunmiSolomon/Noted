import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { style } from "./Styles";

const HomeNotes = () => {
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text>This is home note</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeNotes;
