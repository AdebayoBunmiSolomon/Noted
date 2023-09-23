import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import { styles } from "./Style";
import { useFonts } from "expo-font";
import { setOfIcons } from "../../../../Icons";
import SearchIcon from "react-native-vector-icons/MaterialCommunityIcons";
import ArrowDown from "react-native-vector-icons/Entypo";
import ButtonCard from "../../../components/ButtonCard";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const HomePage = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  let [isOpen, setIsOpen] = useState(false);

  const snapPoints = ["25%", "40%", "60%"];

  const [loaded] = useFonts({
    "RobotoCondensed-Regular": require("../../../../assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const showModal = () => {
    bottomSheetModalRef.current?.present();
    setIsOpen((isOpen = true));
  };

  return (
    <GestureHandlerRootView style={[styles.container, {}]}>
      <View style={styles.manIconView}>
        <Image source={setOfIcons.manIcon} style={styles.manIcon} />
        <View style={styles.manIconTextView}>
          <Text style={styles.manIconHelloText}>Hello,</Text>
          <Text style={styles.manIconGreetingText}>Good Morning</Text>
        </View>
      </View>
      <View style={styles.searchView}>
        <TextInput style={styles.searchInput} placeholder='search here' />
        <TouchableOpacity style={styles.dropDownIcon} onPress={showModal}>
          <ArrowDown name='chevron-down' size={28} color={"white"} />
        </TouchableOpacity>
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
      <View
        style={[
          {
            backgroundColor: isOpen === true ? "#4b404063" : undefined,
            width: isOpen === true ? "100%" : undefined,
            height: isOpen === true ? "100%" : undefined,
            zIndex: 0,
            position: isOpen === true ? "absolute" : undefined,
          },
        ]}>
        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            backgroundStyle={{
              borderRadius: 30,
              overflow: "hidden",
              backgroundColor: "white",
            }}
            onDismiss={() => {
              // bottomSheetModalRef.current?.close();
              setIsOpen((isOpen = false));
            }}>
            <View>
              <Text>Hello</Text>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    </GestureHandlerRootView>
  );
};

export default HomePage;
