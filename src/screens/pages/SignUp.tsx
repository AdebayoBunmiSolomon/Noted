import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { signUpStyle } from "./style/PagesStyle";
import Icon from "react-native-vector-icons/Ionicons";
import PinIcon from "react-native-vector-icons/Entypo";
import PasswordIcon from "react-native-vector-icons/FontAwesome5";
import ToastMessage from "../../components/ToastMessage";
import { StackActions } from "@react-navigation/native";
import Header from "../../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface SignUpProps {
  navigation: any;
}

const SignUp: React.FunctionComponent<SignUpProps> = ({ navigation }) => {
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

  const userPin: string = pin.input1 + pin.input2 + pin.input3 + pin.input4;

  const signUpUser = async () => {
    await AsyncStorage.setItem("user", JSON.stringify(userPin));
    // const getUser: string | null = await AsyncStorage.getItem("user");
    // const parsedUserData = JSON.parse(getUser!);
    // console.log(parsedUserData);
  };

  const signUp = () => {
    console.log({ pin });
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
      setToastText("Success");
      setToastDesc("pin completed");
      setToastType("success");
      handleShowToast();
      signUpUser();
      const timer = setTimeout(() => {
        navigation.dispatch(
          StackActions.replace("Tab", {
            screen: "Home Page",
          })
        );
        clearTimeout(timer);
      }, 1000);
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

  return (
    <SafeAreaView style={signUpStyle.container}>
      <ToastMessage
        text={toastText}
        description={toastDesc}
        type={toastType}
        ref={toastRef}
      />
      <Header headerText={"Sign up"} goBack={goBack} />

      <View style={signUpStyle.formView}>
        <View>
          <PasswordIcon name='user-lock' size={60} color={"purple"} />
        </View>

        <View style={signUpStyle.formTextInputView}>
          <View>
            <TextInput
              autoFocus={true}
              style={signUpStyle.formTextInput}
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
              style={signUpStyle.formTextInput}
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
              style={signUpStyle.formTextInput}
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
              style={signUpStyle.formTextInput}
              keyboardType={"number-pad"}
              maxLength={1}
              selectTextOnFocus={false}
              secureTextEntry={true}
              returnKeyType={"done"}
              onSubmitEditing={() => {
                //do some actions here
              }}
              ref={ref_input4}
              onChangeText={(pin4) => {
                setPin({ ...pin, input4: pin4 });
                if (!pin4.trim()) {
                  ref_input3.current?.focus();
                } else {
                  //Nothing happens
                }
              }}
              value={pin.input4}
            />
          </View>
        </View>

        <View style={signUpStyle.registerBtnView}>
          <TouchableOpacity
            style={signUpStyle.registerBtn}
            onPress={() => {
              signUp();
            }}>
            <Text style={signUpStyle.registerBtnText}>
              Create pin <PinIcon name={"key"} size={18} color={"white"} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
