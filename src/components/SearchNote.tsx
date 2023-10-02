import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { searchNoteStyle } from "./style/ComponentStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

interface SearchNoteProps {
  noteType: string;
}

const SearchNote: React.FunctionComponent<SearchNoteProps> = ({ noteType }) => {
  let [noteData, setNoteData] = useState<any>();
  const noteTypeText = noteType;
  const navigation: any = useNavigation();

  const loadNoteData = async () => {
    if (noteTypeText === "religion") {
      const getNoteData: string | null = await AsyncStorage.getItem("religion");
      const parsedNoteData = JSON.parse(getNoteData!);
      if (parsedNoteData !== null) {
        setNoteData((noteData = parsedNoteData));
      } else {
        setNoteData([]);
      }
      return;
    }
    if (noteTypeText === "home") {
      const getNoteData: string | null = await AsyncStorage.getItem("home");
      const parsedNoteData = JSON.parse(getNoteData!);
      if (parsedNoteData !== null) {
        setNoteData((noteData = parsedNoteData));
      } else {
        setNoteData((noteData = null));
      }
      return;
    }
    if (noteTypeText === "work") {
      const getNoteData: string | null = await AsyncStorage.getItem("work");
      const parsedNoteData = JSON.parse(getNoteData!);
      if (parsedNoteData !== null) {
        setNoteData((noteData = parsedNoteData));
      } else {
        setNoteData((noteData = null));
      }
      return;
    }
  };

  useEffect(() => {
    loadNoteData();
  }, [{ noteType, noteData }]);

  const [loaded] = useFonts({
    "RobotoCondensed-Bold": require("../../assets/fonts/RobotoCondensed-Bold.ttf"),
    "RobotoCondensed-Regular": require("../../assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const openNote = (noteDetail: any) => {
    navigation.navigate("NoteDetail", { noteDetail });
  };

  return (
    <View style={searchNoteStyle.container}>
      <Text>
        You have {noteData ? noteData.length : "0"} {noteType}{" "}
        {noteData?.length >= 0 && noteData?.length <= 1 ? "note" : "notes"}
      </Text>
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
            <TouchableOpacity
              style={searchNoteStyle.flatListButton}
              onPress={() => {
                openNote(item);
              }}>
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
