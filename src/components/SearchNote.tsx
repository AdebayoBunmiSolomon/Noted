import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { searchNoteStyle } from "./style/ComponentStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface SearchNoteProps {
  noteType: string;
}

const SearchNote: React.FunctionComponent<SearchNoteProps> = ({ noteType }) => {
  let [noteData, setNoteData] = useState<any>();
  const noteTypeText = noteType;

  const loadNoteData = async () => {
    if (noteTypeText === "religion") {
      const getNoteData: string | null = await AsyncStorage.getItem("religion");
      const parsedNoteData = JSON.parse(getNoteData!);
      if (parsedNoteData !== null) {
        setNoteData((noteData = parsedNoteData));
        console.log(noteData);
      }
      return;
    }
    if (noteTypeText === "home") {
      const getNoteData: string | null = await AsyncStorage.getItem("home");
      const parsedNoteData = JSON.parse(getNoteData!);
      if (parsedNoteData !== null) {
        setNoteData((noteData = parsedNoteData));
        console.log(noteData);
      }
      return;
    }
    if (noteTypeText === "work") {
      const getNoteData: string | null = await AsyncStorage.getItem("work");
      const parsedNoteData = JSON.parse(getNoteData!);
      if (parsedNoteData !== null) {
        setNoteData((noteData = parsedNoteData));
        console.log(noteData);
      }
      return;
    }
  };

  useEffect(() => {
    loadNoteData();
  }, [noteType]);

  return (
    <View style={searchNoteStyle.container}>
      <FlatList
        data={noteData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchNote;
