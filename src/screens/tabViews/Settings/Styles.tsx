import { StyleSheet, Platform, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export const style = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 50 : 0,
    flex: 1,
  },
  switchView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: screenWidth - 35,
    justifyContent: "space-between",
  },
  topText: {
    fontWeight: "bold",
    alignContent: "flex-end",
    fontSize: Platform.OS === "android" ? 15 : 17,
  },
  darkModeText: {
    fontWeight: "bold",
    fontSize: Platform.OS === "android" ? 15 : 17,
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
