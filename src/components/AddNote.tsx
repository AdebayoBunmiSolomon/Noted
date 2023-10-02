import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  ScrollView,
  Alert,
} from "react-native";
import { addNoteStyle } from "./style/ComponentStyle";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";
import { CheckButton } from "./RoundButton";
import { CloseButton } from "./RoundButton";
import Check from "react-native-vector-icons/Entypo";
import Close from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  //For addnote input
  const [addNoteInput, setAddNoteInput] = useState({
    title: "",
    desc: "",
  });

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

  //Save religion note
  const saveReligionNote = async () => {
    // await AsyncStorage.clear();
    const getNoteData: string | null = await AsyncStorage.getItem("religion");
    const parsedNoteData = JSON.parse(getNoteData!);
    if (parsedNoteData === null) {
      await AsyncStorage.setItem("religion", JSON.stringify(noteData));
      alertComponent("Religion notes", "First note added", "Ok", () => {
        console.log("Ok pressed");
      });
      setAddNoteInput({
        ...addNoteInput,
        title: "",
        desc: "",
      });
    } else {
      //remove whitespace from title input
      const formattedTitle = addNoteInput.title.replace(/^\s+|\s+$/gm, "");

      //Get list of note title from the array list
      const noteTitle = parsedNoteData.map((item: any) => item.title);
      console.log(noteTitle);

      //Assign index number to note title gotten
      for (let i: number = 0; i <= noteTitle.length; i++) {
        if (noteTitle[i] === formattedTitle) {
          alertComponent(
            "Religion notes",
            "Note title already exist",
            "Ok",
            () => {
              console.log("Ok pressed");
            }
          );
          ref_titleInput.current?.focus();
          return i;
        }
      }
      //Push new note list if note doesn't exist
      parsedNoteData.push({
        id: Date.now(),
        time: Date.now(),
        title: addNoteInput.title.replace(/^\s+|\s+$/gm, ""),
        desc: addNoteInput.desc,
        type: noteType,
      });
      await AsyncStorage.setItem("religion", JSON.stringify(parsedNoteData));
      alertComponent(
        "Religion notes",
        "New note added successfully",
        "Ok",
        () => {
          console.log("Ok pressed");
        }
      );
      setAddNoteInput({ ...addNoteInput, title: "", desc: "" });
      console.log(parsedNoteData);
    }
  };

  //Save home notes
  const saveHomeNote = async () => {
    // await AsyncStorage.clear();
    const getNoteData: string | null = await AsyncStorage.getItem("home");
    const parsedNoteData = JSON.parse(getNoteData!);
    if (parsedNoteData === null) {
      await AsyncStorage.setItem("home", JSON.stringify(noteData));
      alertComponent("Home notes", "First note added", "Ok", () => {
        console.log("Ok pressed");
      });
      setAddNoteInput({
        ...addNoteInput,
        title: "",
        desc: "",
      });
    } else {
      //remove whitespace from title input
      const formattedTitle = addNoteInput.title.replace(/^\s+|\s+$/gm, "");

      //Get list of note title from the array list
      const noteTitle = parsedNoteData.map((item: any) => item.title);
      console.log(noteTitle);

      //Assign index number to note title gotten
      for (let i: number = 0; i <= noteTitle.length; i++) {
        if (noteTitle[i] === formattedTitle) {
          alertComponent("Home notes", "Note title already exist", "Ok", () => {
            console.log("Ok pressed");
          });
          ref_titleInput.current?.focus();
          return i;
        }
      }
      //Push new note list if note doesn't exist
      parsedNoteData.push({
        id: Date.now(),
        time: Date.now(),
        title: addNoteInput.title.replace(/^\s+|\s+$/gm, ""),
        desc: addNoteInput.desc,
        type: noteType,
      });
      await AsyncStorage.setItem("home", JSON.stringify(parsedNoteData));
      alertComponent("Home notes", "New note added successfully", "Ok", () => {
        console.log("Ok pressed");
      });
      setAddNoteInput({ ...addNoteInput, title: "", desc: "" });
      console.log(parsedNoteData);
    }
  };

  //Save home notes
  const saveWorkNote = async () => {
    // await AsyncStorage.clear();
    const getNoteData: string | null = await AsyncStorage.getItem("work");
    const parsedNoteData = JSON.parse(getNoteData!);
    if (parsedNoteData === null) {
      await AsyncStorage.setItem("work", JSON.stringify(noteData));
      alertComponent("Work notes", "First note added", "Ok", () => {
        console.log("Ok pressed");
      });
      setAddNoteInput({
        ...addNoteInput,
        title: "",
        desc: "",
      });
    } else {
      //remove whitespace from title input
      const formattedTitle = addNoteInput.title.replace(/^\s+|\s+$/gm, "");

      //Get list of note title from the array list
      const noteTitle = parsedNoteData.map((item: any) => item.title);
      console.log(noteTitle);

      //Assign index number to note title gotten
      for (let i: number = 0; i <= noteTitle.length; i++) {
        if (noteTitle[i] === formattedTitle) {
          alertComponent("Work notes", "Note title already exist", "Ok", () => {
            console.log("Ok pressed");
          });
          ref_titleInput.current?.focus();
          return i;
        }
      }
      //Push new note list if note doesn't exist
      parsedNoteData.push({
        id: Date.now(),
        time: Date.now(),
        title: addNoteInput.title.replace(/^\s+|\s+$/gm, ""),
        desc: addNoteInput.desc,
        type: noteType,
      });
      await AsyncStorage.setItem("work", JSON.stringify(parsedNoteData));
      alertComponent("Work notes", "New note added successfully", "Ok", () => {
        console.log("Ok pressed");
      });
      setAddNoteInput({ ...addNoteInput, title: "", desc: "" });
      console.log(parsedNoteData);
    }
  };

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
      saveReligionNote();

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
      saveHomeNote();

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
      saveWorkNote();
    }
  };

  return (
    <SafeAreaView style={addNoteStyle.container}>
      <ScrollView>
        <Header headerText={headerText} goBack={goBack} />
        <View style={addNoteStyle.titleTextView}>
          <TextInput
            placeholder='Title'
            style={addNoteStyle.titleText}
            maxLength={50}
            value={addNoteInput.title}
            onChangeText={(inputTitle) => {
              setAddNoteInput({ ...addNoteInput, title: inputTitle });
            }}
            ref={ref_titleInput}
          />
          <TextInput
            placeholder='Description'
            style={addNoteStyle.descText}
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
  );
};

export default AddNote;
