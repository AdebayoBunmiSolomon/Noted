import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { styles } from "./Style";
import { useFonts } from "expo-font";

const HomePage = () => {
  const [loaded] = useFonts({
    "RobotoCondensed-Regular": require("../../../../assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={[styles.container, {}]}>
      <View style={styles.View}>
        <Text style={styles.text}>Hello, from Home view screen</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomePage;
