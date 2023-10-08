import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { loginStyle } from "./style/PagesStyle";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Ionicons";
import { StackActions } from "@react-navigation/native";
import * as LocalAuthentication from "expo-local-authentication";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const navigation = useNavigation();

  const loginOrSignUp = async () => {
    const getUserData: string | null = await AsyncStorage.getItem("user");
    const parsedUserData = JSON.parse(getUserData!);
    if (parsedUserData !== null) {
      navigation.dispatch(StackActions.replace("PinAuth", {}));
      return;
    } else {
      navigation.dispatch(StackActions.replace("SignUp", {}));
      return;
    }
  };

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const [loaded] = useFonts({
    "RobotoCondensed-Regular": require("../../../assets/fonts/RobotoCondensed-Regular.ttf"),
    "RobotoCondensed-Bold": require("../../../assets/fonts/RobotoCondensed-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const fallBackToDefaultAuth = () => {
    console.log("fall back to password authentication");
  };

  const alertComponent = (
    title: string,
    mess: string,
    btnText: string,
    btnFunc: any
  ) => {
    return Alert.alert(title, mess, [
      {
        text: btnText,
        onPress: btnFunc,
      },
    ]);
  };

  const handleBiometricAuth = async () => {
    //check if hardware supports biometric
    const isBioMetricAvailable = await LocalAuthentication.hasHardwareAsync();
    let supportedBiometrics;

    //fallback to default authentication method (password) if biometric is not available
    if (!isBioMetricAvailable) {
      return alertComponent(
        "Biometric not supported",
        "Please enter your password",
        "Ok",
        () => fallBackToDefaultAuth()
      );
    } else if (isBioMetricAvailable) {
      //check biometric types available (fingerprint, facial recognition, iris recognition)
      supportedBiometrics =
        await LocalAuthentication.supportedAuthenticationTypesAsync();

      //Check bioMetrics are saved locally in user's device
      const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
      if (!savedBiometrics) {
        return alertComponent(
          "Biometric not found",
          "Please login with password",
          "Ok",
          () => fallBackToDefaultAuth()
        );
      } else {
        //authenticate with biometric
        const biometricAuth = await LocalAuthentication.authenticateAsync({
          promptMessage: "Login with Biometrics",
          cancelLabel: "cancel",
          // disableDeviceFallback: true,
        });

        //Log the user in on success
        if (biometricAuth.success === true) {
          navigation.dispatch(StackActions.replace("Tab", {}));
          // twoButtonAlert();
          // console.log(isBioMetricAvailable);
          // console.log({ supportedBiometrics });
          console.log({ biometricAuth });
        }
      }
    }
  };

  return (
    <SafeAreaView style={loginStyle.container}>
      <View style={loginStyle.loginButtonView}>
        <TouchableOpacity
          style={loginStyle.loginButton}
          onPress={loginOrSignUp}>
          <Text style={loginStyle.buttonText}>
            Login / Sign up <Icon name='login' size={15} />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={loginStyle.biometricsButtonView}>
        <TouchableOpacity
          style={loginStyle.biometricsButton}
          onPress={handleBiometricAuth}>
          <Text style={loginStyle.buttonText}>
            Continue with biometrics{" "}
            <Icon2 name='finger-print-sharp' size={18} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
