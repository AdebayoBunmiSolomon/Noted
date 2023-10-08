import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
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
import SearchNote from "../../../components/SearchNote";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomePage = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  let [searchInput, setSearchInput] = useState("");
  let [searchResult, setSearchResult] = useState<any>();
  let [isLoading, setIsLoading] = useState<boolean>(true);

  const date = new Date();
  const curHrs: number = date.getHours();
  let [greeting, setGreeting] = useState("");

  let [isOpen, setIsOpen] = useState(false);
  let [isSelection, setIsSelection] = useState({
    home: "",
    work: "",
    religion: "",
  });
  let [selectionState, setSelectionState] = useState("");

  const getGreeting = () => {
    if (curHrs >= 0 && curHrs < 12) {
      setGreeting("Good Morning");
    } else if (curHrs >= 12 && curHrs < 16) {
      setGreeting("Good Afternoon");
    } else if (curHrs >= 16) {
      setGreeting("Good Evening");
    }
  };

  useState(() => {
    getGreeting();
  });

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

  const renderSearchNote = () => {
    if (!selectionState.trim() && searchInput) {
      alertComponent("Notee", "Please select note type", "Ok", () => {
        console.log("Ok pressed");
      });
      setSearchInput("");
      return;
    } else {
      return (
        //Show search note
        <>
          <SearchNote noteType={selectionState} />
          {renderBottomSheetModal()}
        </>
      );
    }
  };

  const renderBottomSheetModal = () => {
    return (
      <View
        style={[
          {
            backgroundColor: isOpen === true ? "#4b404063" : undefined,
            width: isOpen === true ? "100%" : undefined,
            height: isOpen === true ? "100%" : undefined,
            zIndex: 0,
            position: isOpen === true ? "absolute" : undefined,
            top: 0,
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
    );
  };

  const renderQuickAccessView = () => {
    return (
      <>
        <View style={styles.quickAccessView}>
          <Text style={styles.quickAccessText}>Quick Access</Text>
          <View>
            <ButtonCard />
          </View>
        </View>
        {renderBottomSheetModal()}
      </>
    );
  };

  const alertComponent = (
    title: string,
    message: string,
    buttonText: string,
    buttonOnpress: any
  ) => {
    return Alert.alert(title, message, [
      {
        text: buttonText,
        onPress: buttonOnpress(),
      },
    ]);
  };

  const renderSearchResult = async () => {
    setIsLoading((isLoading = true));
    try {
      if (selectionState === "work") {
        setIsLoading((isLoading = true));
        const getSearchResult: string | null = await AsyncStorage.getItem(
          "work"
        );
        setIsLoading((isLoading = true));
        const parsedSearchResult = JSON.parse(getSearchResult!);
        setIsLoading((isLoading = false));
        if (parsedSearchResult !== null) {
          console.log(parsedSearchResult);
          setSearchResult((searchResult = parsedSearchResult));
          setIsLoading((isLoading = false));
        }
      }
    } catch (error: any) {
      setIsLoading((isLoading = false));
      console.log(error.toString());
    }
  };

  return (
    <>
      <StatusBar backgroundColor='purple' />
      <GestureHandlerRootView style={[styles.container, {}]}>
        <View style={styles.manIconView}>
          <Image source={setOfIcons.manIcon} style={styles.manIcon} />
          <View style={styles.manIconTextView}>
            <Text style={styles.manIconHelloText}>Hello,</Text>
            <Text style={styles.manIconGreetingText}>{greeting}</Text>
          </View>
        </View>
        <View style={styles.searchView}>
          <TextInput
            style={styles.searchInput}
            placeholder='search by title'
            value={searchInput}
            onChangeText={(input) => {
              setSearchInput((searchInput = input));
              console.log(searchInput);
            }}
          />
          <TouchableOpacity style={styles.dropDownIcon} onPress={showModal}>
            <ArrowDown name='chevron-down' size={28} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.searchIcon}
            onPress={renderSearchResult}>
            <SearchIcon
              name='clipboard-text-search'
              size={28}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
        {/* <ScrollView> */}
        {!searchInput.trim()
          ? //render quick access view if empty
            renderQuickAccessView()
          : //render search note view if not empty
            renderSearchNote()}
      </GestureHandlerRootView>
    </>
  );
};

export default HomePage;
