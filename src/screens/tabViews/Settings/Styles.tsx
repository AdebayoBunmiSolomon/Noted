import { StyleSheet, Platform } from "react-native";

export const style = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 50 : 0,
    display: "flex",
    alignItems: "center",
  },
});
