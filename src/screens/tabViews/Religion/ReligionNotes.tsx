import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { styles } from "./Styles";
import AddNote from "../../../components/AddNote";

const ReligionNotes = () => {
  const addNote: boolean = true;

  let [noteType, setNoteType] = useState("");

  return (
    <>
      {(() => {
        switch (addNote) {
          case true:
            return (
              <AddNote
                headerText={"Add religion notes"}
                onclickCreate={() => {
                  setNoteType((noteType = "Religion"));
                  console.log(noteType);
                }}
                noteType={"Religion"}
              />
            );
          default:
            return (
              <SafeAreaView style={styles.container}>
                <View>
                  <Text>Welcome to Religion Notes</Text>
                </View>
              </SafeAreaView>
            );
        }
      })()}
    </>
  );
};

export default ReligionNotes;
