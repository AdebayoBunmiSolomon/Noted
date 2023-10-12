import React, { useContext } from "react";
import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { buttonCard } from "./style/ComponentStyle";
import { useNavigation } from "@react-navigation/native";
import { NoteContext } from "../context/NoteContext";
import { themeSettings } from "../screens/tabViews/Settings/Theme";

const buttonList = [
  {
    icon: require("../../assets/icons/holy-bible.png"),
    buttonText: "Religion Notes",
    navigation: "Religion",
  },
  {
    icon: require("../../assets/icons/house.png"),
    buttonText: "Home Notes",
    navigation: "Home",
  },
  {
    icon: require("../../assets/icons/working.png"),
    buttonText: "Work Notes",
    navigation: "Work",
  },
  {
    icon: require("../../assets/icons/settings.png"),
    buttonText: "Settings",
    navigation: "Settings",
  },
];

const ButtonCard = () => {
  const navigation: any = useNavigation();
  const { isDarkTheme } = useContext(NoteContext);

  return (
    <View style={buttonCard.buttonMainView}>
      <FlatList
        key={"#"}
        data={buttonList}
        keyExtractor={(item) => "#" + item.buttonText}
        renderItem={({ item }) => (
          <View style={buttonCard.buttonView}>
            <TouchableOpacity
              style={[
                buttonCard.button,
                {
                  backgroundColor:
                    isDarkTheme === true
                      ? themeSettings.darkTheme.cardBgColor
                      : themeSettings.lightTheme.cardBgColor,
                },
              ]}
              onPress={() => {
                {
                  navigation.navigate(String(item.navigation));
                }
              }}>
              <Image source={item.icon} style={buttonCard.buttonIcon} />
              <Text style={buttonCard.buttonText}>{item.buttonText}</Text>
            </TouchableOpacity>
          </View>
        )}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

export default ButtonCard;
