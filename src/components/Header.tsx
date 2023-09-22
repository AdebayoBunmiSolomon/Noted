import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { headerStyle } from "./style/ComponentStyle";
import Icon from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";

interface HeaderProps {
  goBack: any;
  headerText: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  goBack,
  headerText,
}) => {
  const [loaded] = useFonts({
    "RobotoCondensed-Regular": require("../../assets/fonts/RobotoCondensed-Regular.ttf"),
    "RobotoCondensed-Bold": require("../../assets/fonts/RobotoCondensed-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <View style={headerStyle.header}>
        <View>
          <TouchableOpacity style={headerStyle.bckArrowBtn} onPress={goBack}>
            <Text>
              <Icon name='arrow-back' size={30} color={"purple"} />
            </Text>
          </TouchableOpacity>
        </View>

        <View style={headerStyle.headerTextView}>
          <Text style={headerStyle.headerText}>{headerText}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
