import React from "react";
import { SafeAreaView, View, TextInput } from "react-native";
import { addNoteStyle } from "./style/ComponentStyle";

const AddNote = () => {
  return (
    <SafeAreaView style={addNoteStyle.container}>
      <View style={addNoteStyle.titleTextView}>
        <TextInput
          placeholder='title'
          style={addNoteStyle.titleText}
          maxLength={50}
        />
        <TextInput
          placeholder='description'
          style={addNoteStyle.descText}
          maxLength={500}
          multiline={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddNote;
