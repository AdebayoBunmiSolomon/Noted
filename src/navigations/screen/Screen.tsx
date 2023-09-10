import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Carousel from "../../components/Carousel";
import Tab from "../tab/Tab";
import Login from "../../screens/pages/Login";
import SignUp from "../../screens/pages/SignUp";

const Stacks = createNativeStackNavigator();

const Screen = () => {
  return (
    <Stacks.Navigator screenOptions={{ headerShown: false }}>
      <Stacks.Screen name="Carousel" component={Carousel} />
      <Stacks.Screen
        name="Tab"
        component={Tab}
        options={{
          animation: "slide_from_right",
        }}
      />
      <Stacks.Screen name="Login" component={Login} />
      <Stacks.Screen name="SignUp" component={SignUp} />
    </Stacks.Navigator>
  );
};

export default Screen;
