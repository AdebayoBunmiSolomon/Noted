import React from "react";
import { BackHandler, Dimensions, Platform, StyleSheet } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export const loginStyle = StyleSheet.create({
  //Styling goes here...
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: Platform.OS === "android" ? 17 : 23,
    fontFamily:
      Platform.OS === "android"
        ? "RobotoCondensed-Bold"
        : "RobotoCondensed-Bold",
  },
  loginButtonView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "orange",
    width: screenWidth - 30,
    height: screenHeight / 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  biometricsButtonView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  biometricsButton: {
    backgroundColor: "purple",
    width: screenWidth - 30,
    height: screenHeight / 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export const signUpStyle = StyleSheet.create({
  //Styling goes here...
  container: {
    marginTop: Platform.OS === "android" ? 50 : 0,
    flex: 1,
  },
  formView: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: screenHeight / 7,
    gap: 25,
  },
  formTextInputView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    gap: 20,
  },
  formTextInput: {
    borderWidth: 1.2,
    borderColor: "black",
    height: 40,
    width: 40,
    borderRadius: 10,
    textAlign: "center",
    color: "black",
    fontSize: Platform.OS === "android" ? 20 : 25,
    fontWeight: "bold",
  },
  registerBtnView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  registerBtn: {
    backgroundColor: "orange",
    width: screenWidth - 30,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  registerBtnText: {
    color: "white",
    fontSize: Platform.OS === "android" ? 17 : 23,
    fontFamily:
      Platform.OS === "android"
        ? "RobotoCondensed-Bold"
        : "RobotoCondensed-Bold",
  },
});
