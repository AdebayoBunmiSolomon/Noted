import { StyleSheet, Platform, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const pinAuthStyle = StyleSheet.create({
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
    fontFamily:
      Platform.OS === "android"
        ? "RobotoCondensed-Bold"
        : "RobotoCondensed-Bold",
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
  signInBtnView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  signInBtn: {
    backgroundColor: "orange",
    width: screenWidth - 30,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  signInBtnText: {
    color: "white",
    fontSize: Platform.OS === "android" ? 17 : 23,
    fontFamily:
      Platform.OS === "android"
        ? "RobotoCondensed-Bold"
        : "RobotoCondensed-Bold",
  },
});
