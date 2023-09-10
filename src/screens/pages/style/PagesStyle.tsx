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
    fontSize: Platform.OS === "android" ? 17 : 25,
    fontFamily: "RobotoCondensed-Regular",
    fontWeight: "bold",
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
  header: {
    display: "flex",
    flexDirection: "row",
  },
  bckArrowBtn: {
    backgroundColor: "whitesmoke",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 17.5,
    overflow: "hidden",
    borderColor: "purple",
    borderWidth: 1,
    marginLeft: 10,
  },
  headerTextView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth,
  },
  headerText: {
    paddingRight: screenWidth / 6,
    color: "black",
    fontSize: Platform.OS === "android" ? 20 : 25,
    fontFamily: "RobotoCondensed-Regular",
    fontWeight: "bold",
  },
  formView: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: screenHeight / 5,
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
    fontSize: Platform.OS === "android" ? 17 : 25,
    fontFamily: "RobotoCondensed-Regular",
    fontWeight: "bold",
  },
});
