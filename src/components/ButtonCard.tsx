import React from "react";
import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { buttonCard } from "./style/ComponentStyle";
import { useNavigation } from "@react-navigation/native";

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

  return (
    <View>
      <FlatList
        key={"#"}
        data={buttonList}
        keyExtractor={(item) => "#" + item.buttonText}
        renderItem={({ item }) => (
          <View style={buttonCard.buttonView}>
            <View style={buttonCard.buttonSeperator}>
              <TouchableOpacity
                style={buttonCard.button}
                onPress={() => {
                  {
                    navigation.navigate(String(item.navigation));
                  }
                }}>
                <Image source={item.icon} style={buttonCard.buttonIcon} />
                <Text style={buttonCard.buttonText}>{item.buttonText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

export default ButtonCard;
