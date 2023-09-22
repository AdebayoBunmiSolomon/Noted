import React from "react";
import { SafeAreaView, View, TextInput, Text } from "react-native";
import { addNoteStyle } from "./style/ComponentStyle";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";
import { CheckButton } from "./RoundButton";
import { CloseButton } from "./RoundButton";
import Check from "react-native-vector-icons/Entypo";
import Close from "react-native-vector-icons/Ionicons";

const AddNote = () => {
  const navigation: any = useNavigation();

  const goBack = () => {
    navigation.navigate("Tab", {
      screen: "Home Page",
    });
  };

  return (
    <SafeAreaView style={addNoteStyle.container}>
      <Header headerText={"Add note"} goBack={goBack} />
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

      <View style={addNoteStyle.roundButtonView}>
        <CheckButton icon={<Check name='check' size={20} color={"white"} />} />
        <CloseButton icon={<Close name='close' size={24} color={"white"} />} />
      </View>
    </SafeAreaView>
  );
};

export default AddNote;
