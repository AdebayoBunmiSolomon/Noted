import React, { useContext } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { headerStyle } from "./style/ComponentStyle";
import Icon from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
import { NoteContext } from "../context/NoteContext";
import { themeSettings } from "../screens/tabViews/Settings/Theme";

interface HeaderProps {
  goBack: any;
  headerText: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  goBack,
  headerText,
}) => {
  const { isDarkTheme } = useContext(NoteContext);
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
          <Text
            style={[
              headerStyle.headerText,
              {
                color:
                  isDarkTheme === true
                    ? themeSettings.darkTheme.headerColor
                    : themeSettings.lightTheme.headerColor,
                opacity:
                  isDarkTheme === true
                    ? themeSettings.darkTheme.headerOpacity
                    : themeSettings.lightTheme.headerColor,
              },
            ]}>
            {headerText}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
