import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Carousel from "../../components/Carousel";
import Tab from "../tab/Tab";
import Login from "../../screens/pages/Login";
import SignUp from "../../screens/pages/SignUp";
import PinAuth from "../../auth/PinAuth";

const Stacks = createNativeStackNavigator();

const Screen = () => {
  return (
    <Stacks.Navigator screenOptions={{ headerShown: false }}>
      <Stacks.Screen name='Carousel' component={Carousel} />
      <Stacks.Screen
        name='Tab'
        component={Tab}
        options={{
          animation: "slide_from_right",
        }}
      />
      <Stacks.Screen
        name='Login'
        component={Login}
        options={{
          animation: "slide_from_left",
        }}
      />
      <Stacks.Screen
        name='SignUp'
        component={SignUp}
        options={{
          animation: "slide_from_right",
        }}
      />
      <Stacks.Screen
        name='PinAuth'
        component={PinAuth}
        options={{
          animation: "slide_from_right",
        }}
      />
    </Stacks.Navigator>
  );
};

export default Screen;
