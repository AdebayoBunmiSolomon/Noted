import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { styles } from "./Styles";
import AddNote from "../../../components/AddNote";

const ReligionNotes = () => {
  const addNote: boolean = true;
  return (
    <>
      {(() => {
        switch (addNote) {
          case true:
            return <AddNote />;
          default:
            return (
              <SafeAreaView style={styles.container}>
                <View>
                  <Text>Welcome to Religion Notes</Text>
                </View>
              </SafeAreaView>
            );
        }
      })()}
    </>
  );
};

export default ReligionNotes;
