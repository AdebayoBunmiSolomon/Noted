import React, { useContext, useEffect } from "react";
import { View, TextInput, SafeAreaView, ScrollView } from "react-native";
import { editNoteStyle } from "./style/ComponentStyle";
import Header from "./Header";
import { StackActions, useNavigation } from "@react-navigation/native";
import { NoteContext } from "../context/NoteContext";
import { CheckButton } from "./RoundButton";
import Check from "react-native-vector-icons/Entypo";

const EditNote = () => {
  const navigation: any = useNavigation();
  const { editNoteData, setAddNoteInput, addNoteInput, editNote } =
    useContext(NoteContext);

  const goBack = () => {
    navigation.dispatch(
      StackActions.replace("Tab", {
        screen: "Home Page",
      })
    );
  };

  useEffect(() => {
    setAddNoteInput({
      ...addNoteInput,
      title: editNoteData.noteDetail.title,
      desc: editNoteData.noteDetail.desc,
    });
  }, [editNoteData]);

  return (
    <SafeAreaView style={editNoteStyle.container}>
      <Header headerText={"Edit note details"} goBack={goBack} />
      <ScrollView>
        <View style={editNoteStyle.titleTextView}>
          <TextInput
            placeholder='Title'
            style={editNoteStyle.titleText}
            maxLength={50}
            value={addNoteInput.title}
            onChangeText={(inputTitle) => {
              setAddNoteInput({ ...addNoteInput, title: inputTitle });
            }}
          />
          <TextInput
            placeholder='Description'
            style={editNoteStyle.descText}
            maxLength={300}
            multiline={true}
            textAlignVertical='bottom'
            value={addNoteInput.desc}
            onChangeText={(desc) => {
              setAddNoteInput({ ...addNoteInput, desc: desc });
            }}
          />
        </View>
        <View style={editNoteStyle.roundButtonView}>
          <CheckButton
            icon={<Check name='check' size={20} color={"white"} />}
            onPress={() => {
              editNote(editNoteData.noteDetail.type);
              setAddNoteInput({ ...addNoteInput, title: "", desc: "" });
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditNote;
