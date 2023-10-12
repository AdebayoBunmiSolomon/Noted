import React, { useContext, useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { pinAuthStyle } from "./Style";
import PinIcon from "react-native-vector-icons/MaterialCommunityIcons";
import PasswordIcon from "react-native-vector-icons/FontAwesome5";
import { StackActions } from "@react-navigation/native";
import Header from "../components/Header";
import ToastMessage from "../components/ToastMessage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NoteContext } from "../context/NoteContext";
import { themeSettings } from "../screens/tabViews/Settings/Theme";

const PinAuth = ({ navigation }: any) => {
  //for access input properties
  const ref_input1 = useRef<TextInput>(null);
  const ref_input2 = useRef<TextInput>(null);
  const ref_input3 = useRef<TextInput>(null);
  const ref_input4 = useRef<TextInput>(null);
  //For toast message
  const toastRef: any = useRef();
  const [toastText, setToastText] = useState("");
  const [toastDesc, setToastDesc] = useState("");
  const [toastType, setToastType] = useState("success");
  //for pin values
  const [pin, setPin] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });
  const { isDarkTheme } = useContext(NoteContext);

  const userPin: string = pin.input1 + pin.input2 + pin.input3 + pin.input4;

  const validateUser = async () => {
    const storedPin: string | null = await AsyncStorage.getItem("user");
    const parsedStoredPin = JSON.parse(storedPin!);
    if (parsedStoredPin !== null) {
      if (userPin === parsedStoredPin) {
        setToastText("Success");
        setToastDesc("pin completed");
        setToastType("success");
        handleShowToast();
        const timer = setTimeout(() => {
          navigation.dispatch(
            StackActions.replace("Tab", {
              screen: "Home Page",
            })
          );
          clearTimeout(timer);
        }, 1000);
        return null;
      } else {
        setToastText("Error");
        setToastDesc("pin is incorrect");
        setToastType("danger");
        handleShowToast();
        return null;
      }
    }
  };

  const goBack = () => {
    navigation.dispatch(StackActions.replace("Login", {}));
  };

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  const signIn = () => {
    // console.log({ pin });
    if (!pin.input1.trim()) {
      ref_input1.current?.focus();
      setToastText("Error");
      setToastDesc("pin not completed");
      setToastType("danger");
      handleShowToast();
      return null;
    }
    if (!pin.input2.trim()) {
      ref_input2.current?.focus();
      setToastText("Error");
      setToastDesc("pin not completed");
      setToastType("danger");
      handleShowToast();
      return null;
    }
    if (!pin.input3.trim()) {
      ref_input3.current?.focus();
      setToastText("Error");
      setToastDesc("pin not completed");
      setToastType("danger");
      handleShowToast();
      return null;
    }
    if (!pin.input4?.trim()) {
      ref_input4.current?.focus();
      setToastText("Error");
      setToastDesc("pin not completed");
      setToastType("danger");
      handleShowToast();
      return null;
    } else {
      validateUser();
    }
  };

  return (
    <SafeAreaView
      style={[
        pinAuthStyle.container,
        {
          backgroundColor:
            isDarkTheme === true
              ? themeSettings.darkTheme.backgroundColor
              : themeSettings.lightTheme.backgroundColor,
        },
      ]}>
      <ToastMessage
        text={toastText}
        description={toastDesc}
        type={toastType}
        ref={toastRef}
      />
      <Header headerText={"Pin Authentication"} goBack={goBack} />

      <View style={pinAuthStyle.formView}>
        <View>
          <PasswordIcon name='user-lock' size={60} color={"purple"} />
        </View>

        <View style={pinAuthStyle.formTextInputView}>
          <View>
            <TextInput
              autoFocus={true}
              style={[
                pinAuthStyle.formTextInput,
                {
                  borderColor:
                    isDarkTheme === true
                      ? themeSettings.darkTheme.borderColor
                      : themeSettings.lightTheme.borderColor,
                  color:
                    isDarkTheme === true
                      ? themeSettings.darkTheme.textColor
                      : themeSettings.lightTheme.textColor,
                },
              ]}
              keyboardType={"number-pad"}
              maxLength={1}
              selectTextOnFocus={false}
              secureTextEntry={true}
              returnKeyType={"next"}
              onSubmitEditing={() => ref_input2.current?.focus()}
              blurOnSubmit={false}
              onChangeText={(pin1) => {
                setPin({ ...pin, input1: pin1 });
                if (!pin1.trim()) {
                  //Nothing happens
                } else {
                  ref_input2.current?.focus();
                }
              }}
              value={pin.input1}
              ref={ref_input1}
            />
          </View>
          <View>
            <TextInput
              style={[
                pinAuthStyle.formTextInput,
                {
                  borderColor:
                    isDarkTheme === true
                      ? themeSettings.darkTheme.borderColor
                      : themeSettings.lightTheme.borderColor,
                  color:
                    isDarkTheme === true
                      ? themeSettings.darkTheme.textColor
                      : themeSettings.lightTheme.textColor,
                },
              ]}
              keyboardType={"number-pad"}
              maxLength={1}
              selectTextOnFocus={false}
              secureTextEntry={true}
              returnKeyType={"next"}
              onSubmitEditing={() => ref_input3.current?.focus()}
              ref={ref_input2}
              blurOnSubmit={false}
              onChangeText={(pin2) => {
                setPin({ ...pin, input2: pin2 });
                if (!pin2.trim()) {
                  ref_input1.current?.focus();
                } else {
                  ref_input3.current?.focus();
                }
              }}
              value={pin.input2}
            />
          </View>
          <View>
            <TextInput
              style={[
                pinAuthStyle.formTextInput,
                {
                  borderColor:
                    isDarkTheme === true
                      ? themeSettings.darkTheme.borderColor
                      : themeSettings.lightTheme.borderColor,
                  color:
                    isDarkTheme === true
                      ? themeSettings.darkTheme.textColor
                      : themeSettings.lightTheme.textColor,
                },
              ]}
              keyboardType={"number-pad"}
              maxLength={1}
              selectTextOnFocus={false}
              secureTextEntry={true}
              returnKeyType={"next"}
              onSubmitEditing={() => ref_input4.current?.focus()}
              ref={ref_input3}
              blurOnSubmit={false}
              onChangeText={(pin3) => {
                setPin({ ...pin, input3: pin3 });
                if (!pin3.trim()) {
                  ref_input2.current?.focus();
                } else {
                  ref_input4.current?.focus();
                }
              }}
              value={pin.input3}
            />
          </View>
          <View>
            <TextInput
              style={[
                pinAuthStyle.formTextInput,
                {
                  borderColor:
                    isDarkTheme === true
                      ? themeSettings.darkTheme.borderColor
                      : themeSettings.lightTheme.borderColor,
                  color:
                    isDarkTheme === true
                      ? themeSettings.darkTheme.textColor
                      : themeSettings.lightTheme.textColor,
                },
              ]}
              keyboardType={"number-pad"}
              maxLength={1}
              selectTextOnFocus={false}
              secureTextEntry={true}
              returnKeyType={"done"}
              onSubmitEditing={() => {
                //do some actions here
              }}
              ref={ref_input4}
              value={pin.input4}
              onChangeText={(pin4) => {
                setPin({ ...pin, input4: pin4 });
                if (!pin4.trim()) {
                  ref_input3.current?.focus();
                } else {
                  //Nothing happens
                }
              }}
            />
          </View>
        </View>

        <View style={pinAuthStyle.signInBtnView}>
          <TouchableOpacity style={pinAuthStyle.signInBtn} onPress={signIn}>
            <Text style={pinAuthStyle.signInBtnText}>
              Sign in <PinIcon name={"shield-key"} size={20} color={"white"} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PinAuth;
