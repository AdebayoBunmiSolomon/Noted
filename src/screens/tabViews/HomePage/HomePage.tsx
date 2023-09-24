import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./Style";
import { bottomSheetModalStyle } from "./Style";
import { useFonts } from "expo-font";
import { setOfIcons } from "../../../../Icons";
import SearchIcon from "react-native-vector-icons/MaterialCommunityIcons";
import CheckIcon from "react-native-vector-icons/AntDesign";
import UncheckIcon from "react-native-vector-icons/Entypo";
import ArrowDown from "react-native-vector-icons/Entypo";
import ButtonCard from "../../../components/ButtonCard";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const HomePage = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  let [isOpen, setIsOpen] = useState(false);
  let [isSelection, setIsSelection] = useState({
    home: "",
    work: "",
    religion: "",
  });
  let [selectionState, setSelectionState] = useState("");

  const snapPoints = ["25%"];

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
            <View style={bottomSheetModalStyle.bottomSheetView}>
              <View>
                <Text style={bottomSheetModalStyle.headerText}>
                  Select note
                </Text>
              </View>
              <View style={bottomSheetModalStyle.selectView}>
                {/* Home note selection */}
                <TouchableOpacity
                  style={bottomSheetModalStyle.selectButton}
                  onPress={() => {
                    setIsSelection(
                      (isSelection = { ...isSelection, home: "home" })
                    );
                    setSelectionState((selectionState = isSelection.home));
                    console.log(selectionState);
                  }}>
                  <Text style={bottomSheetModalStyle.selectButtonText}>
                    Home notes
                  </Text>
                  {selectionState === "home" ? (
                    <CheckIcon name='checkcircle' size={20} color={"orange"} />
                  ) : (
                    <UncheckIcon name='circle' size={20} color={"gray"} />
                  )}
                </TouchableOpacity>
                {/* Work note selection */}
                <TouchableOpacity
                  style={bottomSheetModalStyle.selectButton}
                  onPress={() => {
                    setIsSelection(
                      (isSelection = { ...isSelection, work: "work" })
                    );
                    setSelectionState((selectionState = isSelection.work));
                    console.log(selectionState);
                  }}>
                  <Text style={bottomSheetModalStyle.selectButtonText}>
                    Work notes
                  </Text>
                  {selectionState === "work" ? (
                    <CheckIcon name='checkcircle' size={20} color={"orange"} />
                  ) : (
                    <UncheckIcon name='circle' size={20} color={"gray"} />
                  )}
                </TouchableOpacity>
                {/* Religion note selection */}
                <TouchableOpacity
                  style={bottomSheetModalStyle.selectButton}
                  onPress={() => {
                    setIsSelection(
                      (isSelection = { ...isSelection, religion: "religion" })
                    );
                    setSelectionState((selectionState = isSelection.religion));
                    console.log(selectionState);
                  }}>
                  <Text style={bottomSheetModalStyle.selectButtonText}>
                    Religion notes
                  </Text>
                  {selectionState === "religion" ? (
                    <CheckIcon name='checkcircle' size={20} color={"orange"} />
                  ) : (
                    <UncheckIcon name='circle' size={20} color={"gray"} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    </GestureHandlerRootView>
  );
};

export default HomePage;
