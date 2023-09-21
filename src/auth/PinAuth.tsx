import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { pinAuthStyle } from "./Style";
import Icon from "react-native-vector-icons/Ionicons";
import PinIcon from "react-native-vector-icons/MaterialCommunityIcons";
import PasswordIcon from "react-native-vector-icons/FontAwesome5";
import { StackActions } from "@react-navigation/native";

const PinAuth = ({ navigation }: any) => {
  const ref_input2 = useRef<TextInput>(null);
  const ref_input3 = useRef<TextInput>(null);
  const ref_input4 = useRef<TextInput>(null);

  const [pin, setPin] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  const goBack = () => {
    navigation.dispatch(StackActions.replace("Login", {}));
  };

  const signIn = () => {
    if (
      !pin.input1.trim() ||
      !pin.input2.trim() ||
      !pin.input3.trim() ||
      !pin.input4.trim()
    ) {
      Alert.alert("Error", "please set up pin", [
        {
          text: "cancel",
          onPress: () => {
            console.log("cancel pressed");
          },
        },
        {
          text: "Ok",
          onPress: () => {
            console.log("Ok pressed");
          },
        },
      ]);
      return;
    } else {
      navigation.dispatch(StackActions.replace("Tab", { screen: "Home Page" }));
    }
  };
  return (
    <SafeAreaView style={pinAuthStyle.container}>
      <View style={pinAuthStyle.header}>
        <View>
          <TouchableOpacity style={pinAuthStyle.bckArrowBtn} onPress={goBack}>
            <Text>
              <Icon name='arrow-back' size={30} color={"purple"} />
            </Text>
          </TouchableOpacity>
        </View>

        <View style={pinAuthStyle.headerTextView}>
          <Text style={pinAuthStyle.headerText}>Pin Authentication</Text>
        </View>
      </View>

      <View style={pinAuthStyle.formView}>
        <View>
          <PasswordIcon name='user-lock' size={60} color={"purple"} />
        </View>

        <View style={pinAuthStyle.formTextInputView}>
          <View>
            <TextInput
              autoFocus={true}
              style={pinAuthStyle.formTextInput}
              keyboardType={"number-pad"}
              maxLength={1}
              selectTextOnFocus={false}
              secureTextEntry={true}
              returnKeyType={"next"}
              onSubmitEditing={() => ref_input2.current?.focus()}
              blurOnSubmit={false}
              onChangeText={(pin1) => setPin({ ...pin, input1: pin1 })}
              value={pin.input1}
            />
          </View>
          <View>
            <TextInput
              style={pinAuthStyle.formTextInput}
              keyboardType={"number-pad"}
              maxLength={1}
              selectTextOnFocus={false}
              secureTextEntry={true}
              returnKeyType={"next"}
              onSubmitEditing={() => ref_input3.current?.focus()}
              ref={ref_input2}
              blurOnSubmit={false}
              onChangeText={(pin2) => setPin({ ...pin, input2: pin2 })}
              value={pin.input2}
            />
          </View>
          <View>
            <TextInput
              style={pinAuthStyle.formTextInput}
              keyboardType={"number-pad"}
              maxLength={1}
              selectTextOnFocus={false}
              secureTextEntry={true}
              returnKeyType={"next"}
              onSubmitEditing={() => ref_input4.current?.focus()}
              ref={ref_input3}
              blurOnSubmit={false}
              onChangeText={(pin3) => setPin({ ...pin, input3: pin3 })}
              value={pin.input3}
            />
          </View>
          <View>
            <TextInput
              style={pinAuthStyle.formTextInput}
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
              onChangeText={(pin4) => setPin({ ...pin, input4: pin4 })}
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
