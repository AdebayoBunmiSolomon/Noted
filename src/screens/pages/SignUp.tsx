import React, { useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { signUpStyle } from "./style/PagesStyle";
import Icon from "react-native-vector-icons/Ionicons";
import PasswordIcon from "react-native-vector-icons/FontAwesome5";

const SignUp = () => {
  const ref_input2 = useRef<TextInput>(null);
  const ref_input3 = useRef<TextInput>(null);
  const ref_input4 = useRef<TextInput>(null);

  return (
    <SafeAreaView style={signUpStyle.container}>
      <View style={signUpStyle.header}>
        <View>
          <TouchableOpacity style={signUpStyle.bckArrowBtn}>
            <Text>
              <Icon name="arrow-back" size={30} color={"purple"} />
            </Text>
          </TouchableOpacity>
        </View>

        <View style={signUpStyle.headerTextView}>
          <Text style={signUpStyle.headerText}>Sign Up</Text>
        </View>
      </View>

      <View style={signUpStyle.formView}>
        <View>
          <PasswordIcon name="user-lock" size={60} color={"purple"} />
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
              onSubmitEditing={() => {
                //do some actions here
              }}
              ref={ref_input4}
            />
          </View>
        </View>

        <View style={signUpStyle.registerBtnView}>
          <TouchableOpacity style={signUpStyle.registerBtn}>
            <Text style={signUpStyle.registerBtnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
