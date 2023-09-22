import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { styles } from "./Style";
import { useFonts } from "expo-font";
import { setOfIcons } from "../../../../Icons";
import SearchIcon from "react-native-vector-icons/MaterialCommunityIcons";
import ButtonCard from "../../../components/ButtonCard";

const HomePage = () => {
  const [loaded] = useFonts({
    "RobotoCondensed-Regular": require("../../../../assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={[styles.container, {}]}>
      <View style={styles.manIconView}>
        <Image source={setOfIcons.manIcon} style={styles.manIcon} />
        <View style={styles.manIconTextView}>
          <Text style={styles.manIconHelloText}>Hello,</Text>
          <Text style={styles.manIconGreetingText}>Good Morning</Text>
        </View>
      </View>
      <View style={styles.searchView}>
        <TextInput style={styles.searchInput} placeholder='search here' />
        <TouchableOpacity style={styles.searchIcon}>
          <SearchIcon name='clipboard-text-search' size={28} color={"white"} />
        </TouchableOpacity>
      </View>
      {/* <ScrollView> */}
      <View style={styles.quickAccessView}>
        <Text style={styles.quickAccessText}>Quick Access</Text>
        <View>
          <ButtonCard />
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default HomePage;
