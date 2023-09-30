import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { style } from "./Styles";
import AddNote from "../../../components/AddNote";

const WorkNotes = () => {
  const addNotes: boolean = true;

  let [noteType, setNoteType] = useState("");

  return (
    <>
      {(() => {
        switch (addNotes) {
          case true:
            return (
              <AddNote
                headerText={"Add work notes"}
                onclickCreate={() => {
                  setNoteType((noteType = "Work"));
                  console.log(noteType);
                }}
                noteType={"Work"}
              />
            );
          default:
            return (
              <SafeAreaView style={style.container}>
                <View>
                  <Text>Welcome to WorkNotes</Text>
                </View>
              </SafeAreaView>
            );
        }
      })()}
    </>
  );
};

export default WorkNotes;
