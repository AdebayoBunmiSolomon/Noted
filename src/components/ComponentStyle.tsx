import { StyleSheet, Platform, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export const carouselStyle = StyleSheet.create({
  //styling goes here
  container: {
    marginTop: Platform.OS === "android" ? 50 : 0,
    display: "flex",
    alignItems: "center",
  },
  button: {
    backgroundColor: "purple",
    width: screenWidth - 30,
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: screenHeight / 17,
  },
  buttonView: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: screenHeight / 2,
    width: screenWidth,
  },
  buttonText: {
    color: "white",
    fontSize: Platform.OS === "android" ? 17 : 25,
    fontFamily: "RobotoCondensed-Regular",
    fontWeight: "bold",
  },
  imageFlatListView: {
    display: "flex",
    backgroundColor: "black",
    height: screenHeight / 2,
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

export const msgBoxStyle = StyleSheet.create({
  // styling goes here
  container: {
    marginTop: Platform.OS === "android" ? 50 : 0,
    display: "flex",
    alignItems: "center",
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
