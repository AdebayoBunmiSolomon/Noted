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
    marginTop: Platform.OS === "android" ? 50 : 60,
    display: "flex",
  },
  titleTextView: {
    width: screenWidth,
    display: "flex",
    flexDirection: "column",
    gap: 5,
    alignItems: "center",
  },
  titleText: {
    borderBottomWidth: 2,
    height: 40,
    width: screenWidth - 20,
    borderColor: "purple",
    paddingLeft: 1,
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "ios" ? 20 : 15,
  },
  descText: {
    borderBottomWidth: 2,
    height: screenHeight / 4,
    width: screenWidth - 20,
    borderColor: "purple",
    paddingLeft: 1,
    fontFamily: "RobotoCondensed-Regular",
    fontSize: Platform.OS === "ios" ? 20 : 15,
    // textAlignVertical: Platform.OS === "android" ? "bottom" : "bottom",
  },

  roundButtonView: {
    // backgroundColor: "crimson",
    height: Platform.OS === "android" ? screenHeight / 2 : screenHeight / 2.4,
    display: "flex",
    alignItems: "flex-end",
    gap: 15,
    justifyContent: "flex-end",
    paddingRight: 10,
  },
});

export const searchNoteStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 5,
    paddingTop: 20,
  },
});

export const toastMsgStyle = StyleSheet.create({
  // styling goes here
  safeAreaContainer: {
    alignItems: "center",
    // backgroundColor: "#4b404063",
    // width: "100%",
    // height: "100%",
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
    zIndex: 100,
  },

  text: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFF",
    zIndex: 100,
  },
  description: {
    fontSize: 18,
    fontWeight: "400",
    color: "#FFF",
    zIndex: 100,
  },
  toastView: {
    marginLeft: 12,
    zIndex: 100,
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

export const buttonCard = StyleSheet.create({
  buttonMainView: {
    width: "97%",
    height: screenHeight,
    position: "absolute",
    // backgroundColor: "green",
    alignItems: "center",
  },
  buttonView: {
    display: "flex",
    alignItems: "center",
    width: "50%",
    position: "relative",
    // backgroundColor: "red",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: Platform.OS === "android" ? 170 : 175,
    width: Platform.OS === "android" ? 150 : 160,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonIcon: {
    width: 100,
    height: 100,
  },
  buttonText: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: Platform.OS === "android" ? 18 : 21,
    paddingTop: 10,
    color: "gray",
  },
});

export const headerStyle = StyleSheet.create({
  //Styling goes here...
  header: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 30,
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
    fontFamily: "RobotoCondensed-Bold",
  },
});

export const roundButtonStyle = StyleSheet.create({
  roundButton: {
    backgroundColor: "purple",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 0.7,
    borderColor: "gray",
  },
});
