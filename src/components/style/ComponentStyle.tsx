import { StyleSheet, Platform, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export const carouselStyle = StyleSheet.create({
  //styling goes here
  container: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    backgroundColor: "purple",
    width: screenWidth - 30,
    height: Platform.OS === "android" ? "17%" : "20%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    bottom: 40,
    position: "absolute",
  },
  buttonView: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: Platform.OS === "android" ? screenHeight / 2.5 : screenHeight / 3,
    width: screenWidth,
  },
  buttonText: {
    color: "white",
    fontSize: Platform.OS === "android" ? 17 : 23,
    fontFamily:
      Platform.OS === "android"
        ? "RobotoCondensed-Bold"
        : "RobotoCondensed-Bold",
  },
  imageFlatListView: {
    display: "flex",
    backgroundColor: "black",
    height: screenHeight / 1.5,
    overflow: "hidden",
    width: screenWidth,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  carouselDotIndicators: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
});

export const addNoteStyle = StyleSheet.create({
  // styling goes here
  container: {
    marginTop: Platform.OS === "android" ? 50 : 0,
    display: "flex",
    alignItems: "center",
  },
});

export const toastMsgStyle = StyleSheet.create({
  // styling goes here
  safeAreaContainer: {
    alignItems: "center",
  },
  container: {
    position: "absolute",
    top: Platform.OS === "android" ? 50 : 48,
    width: "90%",
    height: 100,
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  text: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFF",
  },
  description: {
    fontSize: 18,
    fontWeight: "400",
    color: "#FFF",
  },
  toastView: {
    marginLeft: 12,
  },
});

export const imagesStyle = StyleSheet.create({
  // styling goes here
  container: {
    marginTop: Platform.OS === "android" ? 50 : 0,
    display: "flex",
    alignItems: "center",
  },
});
