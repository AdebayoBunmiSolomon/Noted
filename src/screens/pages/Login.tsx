import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { loginStyle } from "./style/PagesStyle";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Ionicons";
import { StackActions } from "@react-navigation/native";

const Login = ({ navigation }: any) => {
  const [loaded] = useFonts({
    "RobotoCondensed-Regular": require("../../../assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const loginOrSignUp = () => {
    navigation.dispatch(StackActions.replace("SignUp", {}));
  };

  return (
    <SafeAreaView style={loginStyle.container}>
      <View style={loginStyle.loginButtonView}>
        <TouchableOpacity
          style={loginStyle.loginButton}
          onPress={loginOrSignUp}
        >
          <Text style={loginStyle.buttonText}>
            Login / Sign up <Icon name="login" size={15} />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={loginStyle.biometricsButtonView}>
        <TouchableOpacity style={loginStyle.biometricsButton}>
          <Text style={loginStyle.buttonText}>
            Continue with biometrics{" "}
            <Icon2 name="finger-print-sharp" size={18} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
