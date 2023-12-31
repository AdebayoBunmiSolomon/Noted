import { StyleSheet, Platform, Dimensions, PlatformColor } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  manIconView: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 5,
    paddingTop: Platform.OS === "android" ? 70 : 80,
  },
  manIcon: {
    width: 60,
    height: 60,
  },
  manIconTextView: {
    paddingTop: 7,
    paddingLeft: 3,
  },
  manIconHelloText: {
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "android" ? 17 : 20,
    color: "purple",
  },
  manIconGreetingText: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: Platform.OS === "android" ? 20 : 23,
  },
  searchView: {
    width: screenWidth,
    marginTop: Platform.OS === "android" ? 50 : 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    width: screenWidth - 110,
    borderWidth: 0.5,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    height: 50,
    justifyContent: "center",
    paddingLeft: 5,
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "ios" ? 20 : 15,
  },
  searchIcon: {
    justifyContent: "center",
    backgroundColor: "purple",
    height: 50,
    width: 60,
    alignItems: "center",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  dropDownIcon: {
    justifyContent: "center",
    backgroundColor: "#c7bcbc8f",
    height: 50,
    width: 30,
    alignItems: "center",
  },
  quickAccessView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: 10,
    marginTop: 40,
  },
  quickAccessText: {
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "android" ? 15 : 18,
    paddingLeft: Platform.OS === "android" ? screenWidth / 27 : 20,
  },
});

export const bottomSheetModalStyle = StyleSheet.create({
  bottomSheetView: {
    display: "flex",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontFamily: "RobotoCondensed-Bold",
  },
  selectView: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  selectButton: {
    flexDirection: "row",
    width: screenWidth,
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
  },
  selectButtonText: {
    fontSize: Platform.OS === "android" ? 17 : 22,
    fontFamily: "RobotoCondensed-Regular",
  },
});
