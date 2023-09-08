import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { style } from "./Styles";

const WorkNotes = () => {
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text>Welcome to WorkNotes</Text>
      </View>
    </SafeAreaView>
  );
};

export default WorkNotes;
