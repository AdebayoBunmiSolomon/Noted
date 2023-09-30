import React, { useRef, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { style } from "./Styles";
import AddNote from "../../../components/AddNote";

const HomeNotes = () => {
  const addNote: boolean = true;
  let [noteType, setNoteType] = useState("");

  return (
    <>
      {(() => {
        switch (addNote) {
          case true:
            return (
              <AddNote
                headerText={"Add home notes"}
                onclickCreate={() => {
                  setNoteType((noteType = "Home"));
                  console.log(noteType);
                }}
                noteType={"Home"}
              />
            );
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
