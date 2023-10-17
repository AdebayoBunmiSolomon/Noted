import React, { useContext, useEffect } from "react";
import { View, TextInput, SafeAreaView, ScrollView } from "react-native";
import { editNoteStyle } from "./style/ComponentStyle";
import Header from "./Header";
import { StackActions, useNavigation } from "@react-navigation/native";
import { NoteContext } from "../context/NoteContext";
import { CheckButton } from "./RoundButton";
import Check from "react-native-vector-icons/Entypo";
import { themeSettings } from "../screens/tabViews/Settings/Theme";

const EditNote = () => {
  const navigation: any = useNavigation();
  const { editNoteData, setAddNoteInput, addNoteInput, editNote, isDarkTheme } =
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
    <SafeAreaView
      style={[
        editNoteStyle.container,
        {
          backgroundColor:
            isDarkTheme === true
              ? themeSettings.darkTheme.backgroundColor
              : themeSettings.lightTheme.backgroundColor,
        },
      ]}>
      <Header headerText={"Edit note details"} goBack={goBack} />
      <ScrollView>
        <View style={editNoteStyle.titleTextView}>
          <TextInput
            placeholder='Title'
            placeholderTextColor={
              isDarkTheme === true
                ? themeSettings.darkTheme.textColor
                : themeSettings.lightTheme.textColor
            }
            style={[
              editNoteStyle.titleText,
              {
                borderColor:
                  isDarkTheme === true
                    ? themeSettings.darkTheme.borderColor2
                    : themeSettings.lightTheme.borderColor2,
                opacity:
                  isDarkTheme === true
                    ? themeSettings.darkTheme.borderOpacity
                    : themeSettings.lightTheme.borderOpacity,
                color:
                  isDarkTheme === true
                    ? themeSettings.darkTheme.textColor
                    : themeSettings.lightTheme.textColor,
              },
            ]}
            maxLength={50}
            value={addNoteInput.title}
            onChangeText={(inputTitle) => {
              setAddNoteInput({ ...addNoteInput, title: inputTitle });
            }}
          />
          <TextInput
            placeholder='Description'
            placeholderTextColor={
              isDarkTheme === true
                ? themeSettings.darkTheme.textColor
                : themeSettings.lightTheme.textColor
            }
            style={[
              editNoteStyle.descText,
              {
                borderColor:
                  isDarkTheme === true
                    ? themeSettings.darkTheme.borderColor2
                    : themeSettings.lightTheme.borderColor2,
                opacity:
                  isDarkTheme === true
                    ? themeSettings.darkTheme.borderOpacity
                    : themeSettings.lightTheme.borderOpacity,
                color:
                  isDarkTheme === true
                    ? themeSettings.darkTheme.textColor
                    : themeSettings.lightTheme.textColor,
              },
            ]}
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
