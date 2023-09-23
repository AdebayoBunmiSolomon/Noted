import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { style } from "./Styles";
import AddNote from "../../../components/AddNote";

const HomeNotes = () => {
  const addNote: boolean = true;

  return (
    <>
      {(() => {
        switch (addNote) {
          case true:
            return <AddNote headerText={"Add home notes"} />;
          default:
            return (
              <SafeAreaView style={style.container}>
                <View>
                  <Text>This is home note</Text>
                </View>
              </SafeAreaView>
            );
        }
      })()}
    </>
  );
};

export default HomeNotes;
