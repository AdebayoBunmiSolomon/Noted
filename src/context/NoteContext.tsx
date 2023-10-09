import React, { createContext, useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions, useNavigation } from "@react-navigation/native";

export const NoteContext = createContext<any>(null);

export const NoteContextProvider = (props: any) => {
  const navigation: any = useNavigation();
  const [addNoteInput, setAddNoteInput] = useState({
    title: "",
    desc: "",
  });
  let [editNoteData, setEditNoteData] = useState<any>();

  const alertComponent = (
    title: string,
    message: string,
    buttonTextYes: string,
    buttonOnPressYes: any,
    buttonTextNo: string,
    buttonOnPressNo: any
  ) => {
    return Alert.alert(title, message, [
      {
        text: buttonTextYes,
        onPress: buttonOnPressYes,
      },
      {
        text: buttonTextNo,
        onPress: buttonOnPressNo,
      },
    ]);
  };

  const deleteNote = (note: any) => {
    alertComponent(
      "Notee",
      "Are you sure you want to delete" + " '" + note.noteDetail.title + "' ",
      "Yes",
      async () => {
        if (note.noteDetail.type === "Home") {
          const getNoteData: string | null = await AsyncStorage.getItem("home");
          const parsedNoteDate = JSON.parse(getNoteData!);
          if (parsedNoteDate !== null) {
            const remainingHomeNote = parsedNoteDate.filter(
              (notes: any) => notes.id !== note.noteDetail.id
            );
            await AsyncStorage.setItem(
              "home",
              JSON.stringify(remainingHomeNote)
            );
          }
          navigation.goBack();
          return;
        } else if (note.noteDetail.type === "Work") {
          const getNoteData: string | null = await AsyncStorage.getItem("work");
          const parsedNoteDate = JSON.parse(getNoteData!);
          if (parsedNoteDate !== null) {
            const remainingWorkNote = parsedNoteDate.filter(
              (notes: any) => notes.id !== note.noteDetail.id
            );
            await AsyncStorage.setItem(
              "work",
              JSON.stringify(remainingWorkNote)
            );
          }
          navigation.goBack();
          return;
        } else if (note.noteDetail.type === "Religion") {
          const getNoteData: string | null = await AsyncStorage.getItem(
            "religion"
          );
          const parsedNoteDate = JSON.parse(getNoteData!);
          if (parsedNoteDate !== null) {
            const remainingReligionNote = parsedNoteDate.filter(
              (notes: any) => notes.id !== note.noteDetail.id
            );
            await AsyncStorage.setItem(
              "religion",
              JSON.stringify(remainingReligionNote)
            );
          }
          navigation.goBack();
          return;
        }
      },
      "No",
      () => {
        console.log("No pressed");
      }
    );
  };

  const saveNote = async (
    asyncKey: string,
    id: number,
    time: number,
    title: string,
    desc: string,
    noteType: string
  ) => {
    // await AsyncStorage.removeItem(asyncKey);
    const getNoteData: string | null = await AsyncStorage.getItem(asyncKey);
    const parsedNoteData = JSON.parse(getNoteData!);
    if (parsedNoteData === null) {
      await AsyncStorage.setItem(
        asyncKey,
        JSON.stringify([
          {
            id: id,
            time: time,
            title: title,
            desc: desc,
            type: noteType,
          },
        ])
      );
      alertComponent(
        `${noteType} notes`,
        "First note added",
        "Ok",
        () => {
          console.log("Ok pressed");
        },
        "Cancel",
        () => {
          console.log("Cancel pressed");
        }
      );
      setAddNoteInput({ ...addNoteInput, title: "", desc: "" });
    } else {
      //remove whitespace from title input
      const formattedTitle = title.replace(/^\s+|\s+$/gm, "");

      //Get list of note title from the array list
      const noteTitle = parsedNoteData.map((item: any) => item.title);
      console.log(noteTitle);

      //Assign index number to note title gotten
      for (let i: number = 0; i <= noteTitle.length; i++) {
        //Check if note input exist already
        if (noteTitle[i] === formattedTitle) {
          alertComponent(
            `${noteType} notes`,
            "Note title already exists",
            "Ok",
            () => {
              console.log("Ok pressed");
            },
            "Cancel",
            () => {
              console.log("Cancel pressed");
            }
          );
          return i;
        }
      }
      //Push new note list if note doesn't exist
      parsedNoteData.push({
        id: Date.now(),
        time: Date.now(),
        title: title.replace(/^\s+|\s+$/gm, ""),
        desc: desc,
        type: noteType,
      });
      await AsyncStorage.setItem(asyncKey, JSON.stringify(parsedNoteData));
      alertComponent(
        `${noteType} notes`,
        "New note added successfully",
        "Ok",
        () => {
          console.log("Ok pressed");
        },
        "Cancel",
        () => {
          console.log("Cancel pressed");
        }
      );
      setAddNoteInput({ ...addNoteInput, title: "", desc: "" });
      console.log(parsedNoteData);
    }
  };

  const openEditNote = (note: any) => {
    navigation.navigate("EditNote");
    setEditNoteData((editNoteData = note));
    console.log(editNoteData);
  };

  const editNote = async (noteType: string) => {
    if (!addNoteInput.title.trim()) {
      alertComponent(
        `${noteType} notes`,
        "Title is empty",
        "Ok",
        () => {
          console.log("Ok pressed");
        },
        "Cancel",
        () => {
          console.log("Cancel pressed");
        }
      );
      return null;
    }
    if (!addNoteInput.desc.trim()) {
      alertComponent(
        `${noteType} notes`,
        "Description is empty",
        "Ok",
        () => {
          console.log("Ok pressed");
        },
        "Cancel",
        () => {
          console.log("Cancel pressed");
        }
      );
      return null;
    } else {
      const getNoteData: string | null = await AsyncStorage.getItem(
        noteType.toLowerCase()
      );
      const parsedNoteData = JSON.parse(getNoteData!);
      if (parsedNoteData !== null) {
        const editedNote = parsedNoteData.filter(
          (items: any) => items.id !== editNoteData.noteDetail.id
        );
        editedNote.push({
          id: Date.now(),
          time: Date.now(),
          title: addNoteInput.title.toLowerCase(),
          desc: addNoteInput.desc,
          type: noteType,
        });
        await AsyncStorage.setItem(
          noteType.toLowerCase(),
          JSON.stringify(editedNote)
        );
        alertComponent(
          `${noteType} notes`,
          "Note successfully edited",
          "Ok",
          () => {
            console.log("Ok pressed");
          },
          "Cancel",
          () => {
            console.log("Cancel Pressed");
          }
        );
        navigation.dispatch(
          StackActions.replace("Tab", {
            screen: "Home Page",
          })
        );
      }
    }
  };

  const contextValue = {
    deleteNote,
    saveNote,
    setAddNoteInput,
    addNoteInput,
    openEditNote,
    editNoteData,
    editNote,
  };

  return (
    <NoteContext.Provider value={contextValue}>
      {props.children}
    </NoteContext.Provider>
  );
};
