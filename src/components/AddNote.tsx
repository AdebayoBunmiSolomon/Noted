import React, { useEffect, useRef } from "react";
import { SafeAreaView, View, TextInput, Text, ScrollView } from "react-native";
import { addNoteStyle } from "./style/ComponentStyle";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";
import { CheckButton } from "./RoundButton";
import { CloseButton } from "./RoundButton";
import Check from "react-native-vector-icons/Entypo";
import Close from "react-native-vector-icons/Ionicons";

interface addNoteProps {
  headerText: string;
}

const AddNote: React.FunctionComponent<addNoteProps> = ({ headerText }) => {
  const navigation: any = useNavigation();
  const ref_descInput = useRef<TextInput>(null);

  useEffect(() => {
    ref_descInput.current?.blur();
  });

  const goBack = () => {
    navigation.navigate("Tab", {
      screen: "Home Page",
    });
  };

  return (
    <SafeAreaView style={addNoteStyle.container}>
      <ScrollView>
        <Header headerText={headerText} goBack={goBack} />
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
            ref={ref_descInput}
          />
        </View>

        <View style={addNoteStyle.roundButtonView}>
          <CheckButton
            icon={<Check name='check' size={20} color={"white"} />}
          />
          <CloseButton
            icon={<Close name='close' size={24} color={"white"} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNote;
