import React, { useContext } from "react";
import { Text, View, ScrollView, Alert } from "react-native";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import { noteDetailsStyle } from "./style/ComponentStyle";
import { useFonts } from "expo-font";
import { CheckButton, CloseButton } from "./RoundButton";
import DeleteIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EditIcon from "react-native-vector-icons/Entypo";
import { NoteContext } from "../context/NoteContext";

const NoteDetail = (props: any) => {
  const navigation: any = useNavigation();
  const note = props.route.params;

  const { deleteNote } = useContext(NoteContext);

  const [loaded] = useFonts({
    "RobotoCondensed-Regular": require("../../assets/fonts/RobotoCondensed-Regular.ttf"),
    "RobotoCondensed-Bold": require("../../assets/fonts/RobotoCondensed-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const goBack = () => {
    navigation.dispatch(
      StackActions.replace("Tab", {
        screen: "Home Page",
      })
    );
  };

  const formatDate = (ms: any) => {
    const date = new Date(ms);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hrs = date.getHours() % 12;
    const mins = date.getMinutes();
    const sec = date.getSeconds();
    const amOrPm = date.getHours() < 12 ? "am" : "pm";

    return `${day}/${month}/${year} - ${hrs}:${mins}:${sec} ${amOrPm}`;
  };

  return (
    <>
      <View style={noteDetailsStyle.container}>
        <Header headerText={"Note Detail"} goBack={goBack} />
      </View>
      <ScrollView contentContainerStyle={noteDetailsStyle.noteDetailView}>
        <Text style={noteDetailsStyle.timeText}>
          {note ? `Created at ${formatDate(note.noteDetail.time)}` : ""}
        </Text>
        <Text style={noteDetailsStyle.title}>
          {note ? note.noteDetail.title : ""}
        </Text>
        <Text style={noteDetailsStyle.desc}>
          {note ? note.noteDetail.desc : ""}
        </Text>
      </ScrollView>
      <View style={noteDetailsStyle.buttonView}>
        <CloseButton
          icon={<DeleteIcon name='delete' size={24} color={"white"} />}
          onPress={() => {
            deleteNote(note);
          }}
        />
        <View style={{ height: 10 }}></View>
        <CheckButton
          icon={<EditIcon name='edit' size={24} color={"white"} />}
          onPress={() => {
            console.log("Edit pressed");
          }}
        />
      </View>
    </>
  );
};

export default NoteDetail;
