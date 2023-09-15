import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  View: {
    marginTop: Platform.OS === "android" ? 50 : 0,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
    borderColor: "purple",
    borderWidth: 1,
  },
  text: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: Platform.OS === "ios" ? 20 : 15,
    paddingLeft: 15,
  },
  buttonText: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: 15,
    fontWeight: "900",
    color: "white",
  },
});
