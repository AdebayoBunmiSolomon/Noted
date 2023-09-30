import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { searchNoteStyle } from "./style/ComponentStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";

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

  const [loaded] = useFonts({
    "RobotoCondensed-Bold": require("../../assets/fonts/RobotoCondensed-Bold.ttf"),
    "RobotoCondensed-Regular": require("../../assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={searchNoteStyle.container}>
      <FlatList
        data={noteData}
        key={"#"}
        keyExtractor={(item) => "#" + item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingRight: 6,
        }}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity style={searchNoteStyle.flatListButton}>
              <Text style={searchNoteStyle.noteTitle} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={searchNoteStyle.noteDesc} numberOfLines={3}>
                {item.desc}
              </Text>
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
};

export default SearchNote;
