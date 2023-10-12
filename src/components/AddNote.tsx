import React, { useContext, useEffect, useRef } from "react";
import { SafeAreaView, View, TextInput, ScrollView, Alert } from "react-native";
import { addNoteStyle } from "./style/ComponentStyle";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";
import { CheckButton } from "./RoundButton";
import { CloseButton } from "./RoundButton";
import Check from "react-native-vector-icons/Entypo";
import Close from "react-native-vector-icons/Ionicons";
import { NoteContext } from "../context/NoteContext";
import { themeSettings } from "../screens/tabViews/Settings/Theme";
import { StatusBar } from "expo-status-bar";

interface addNoteProps {
  headerText: string;
  onclickCreate: any;
  noteType: string;
}

const AddNote: React.FunctionComponent<addNoteProps> = ({
  headerText,
  onclickCreate,
  noteType,
}) => {
  const navigation: any = useNavigation();
  //Input fields
  const ref_titleInput = useRef<TextInput>(null);
  const ref_descInput = useRef<TextInput>(null);
  const { saveNote, setAddNoteInput, addNoteInput } = useContext(NoteContext);
  const { isDarkTheme } = useContext(NoteContext);

  useEffect(() => {
    ref_descInput.current?.blur();
  });

  const goBack = () => {
    setAddNoteInput({ ...addNoteInput, title: "", desc: "" });
    navigation.navigate("Tab", {
      screen: "Home Page",
    });
  };

  const alertComponent = (
    title: string,
    message: string,
    buttonText: string,
    buttonOnpress: any
  ) => {
    return Alert.alert(title, message, [
      {
        text: buttonText,
        onPress: () => {
          buttonOnpress;
        },
      },
    ]);
  };

  const noteData = [
    {
      id: Date.now(),
      time: Date.now(),
      title: addNoteInput.title.replace(/^\s+|\s+$/gm, ""),
      desc: addNoteInput.desc,
      type: noteType,
    },
  ];

  const addNote = () => {
    //Proceed to save religion notes
    if (noteType === "Religion") {
      //Validate input text
      if (!addNoteInput.title.trim()) {
        ref_titleInput.current?.focus();
        alertComponent("Religion notes", "Title is empty", "Ok", () => {
          console.log("OK Pressed");
        });
        return;
      }
      if (!addNoteInput.desc.trim()) {
        ref_descInput.current?.focus();
        alertComponent("Religion notes", "Description is empty", "Ok", () => {
          console.log("Ok pressed");
        });
        return;
      }
      saveNote(
        "religion", //async key type
        Date.now(), //note id
        Date.now(), //note time
        addNoteInput.title.replace(/^\s+|\s+$/gm, ""), //note title
        addNoteInput.desc, //note desc
        noteType //note type
      );
      setAddNoteInput({ ...addNoteInput, title: "", desc: "" });

      //Proceed to save home notes
    } else if (noteType === "Home") {
      //Validate input text
      if (!addNoteInput.title.trim()) {
        ref_titleInput.current?.focus();
        alertComponent("Home notes", "Title is empty", "Ok", () => {
          console.log("OK Pressed");
        });
        return;
      }
      if (!addNoteInput.desc.trim()) {
        ref_descInput.current?.focus();
        alertComponent("Home notes", "Description is empty", "Ok", () => {
          console.log("Ok pressed");
        });
        return;
      }
      saveNote(
        "home", //async key type
        Date.now(), //note id
        Date.now(), //note time
        addNoteInput.title.replace(/^\s+|\s+$/gm, ""), //note title
        addNoteInput.desc, //note desc
        noteType //note type
      );
      setAddNoteInput({ ...addNoteInput, title: "", desc: "" });

      //Proceed to save work notes
    } else if (noteType === "Work") {
      //Validate input text
      if (!addNoteInput.title.trim()) {
        ref_titleInput.current?.focus();
        alertComponent("Work notes", "Title is empty", "Ok", () => {
          console.log("OK Pressed");
        });
        return;
      }
      if (!addNoteInput.desc.trim()) {
        ref_descInput.current?.focus();
        alertComponent("Work notes", "Description is empty", "Ok", () => {
          console.log("Ok pressed");
        });
        return;
      }
      saveNote(
        "work", //async key type
        Date.now(), //note id
        Date.now(), //note time
        addNoteInput.title.replace(/^\s+|\s+$/gm, ""), //note title
        addNoteInput.desc, //note desc
        noteType //note type
      );
      setAddNoteInput({ ...addNoteInput, title: "", desc: "" });
    }
  };

  return (
    <>
      <StatusBar
        backgroundColor={isDarkTheme === true ? "#1a1b1dfc" : "purple"}
      />
      <SafeAreaView
        style={[
          addNoteStyle.container,
          {
            backgroundColor:
              isDarkTheme === true
                ? themeSettings.darkTheme.backgroundColor
                : themeSettings.lightTheme.backgroundColor,
          },
        ]}>
        <Header headerText={headerText} goBack={goBack} />
        <ScrollView>
          <View style={addNoteStyle.titleTextView}>
            <TextInput
              placeholder='Title'
              placeholderTextColor={
                isDarkTheme === true
                  ? themeSettings.darkTheme.textColor
                  : themeSettings.lightTheme.textColor
              }
              style={[
                addNoteStyle.titleText,
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
              ref={ref_titleInput}
            />
            <TextInput
              placeholder='Description'
              placeholderTextColor={
                isDarkTheme === true
                  ? themeSettings.darkTheme.textColor
                  : themeSettings.lightTheme.textColor
              }
              style={[
                addNoteStyle.descText,
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
              // ref={ref_descInput}
              textAlignVertical='bottom'
              value={addNoteInput.desc}
              onChangeText={(desc) => {
                setAddNoteInput({ ...addNoteInput, desc: desc });
              }}
            />
          </View>

          <View style={addNoteStyle.roundButtonView}>
            <CheckButton
              icon={<Check name='check' size={20} color={"white"} />}
              onPress={() => {
                onclickCreate();
                addNote();
              }}
            />
            <CloseButton
              icon={<Close name='close' size={24} color={"white"} />}
              onPress={() => {
                console.log("Close pressed");
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AddNote;
