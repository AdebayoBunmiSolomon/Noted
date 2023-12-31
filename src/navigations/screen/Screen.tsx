import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Carousel from "../../components/Carousel";
import Tab from "../tab/Tab";
import Login from "../../screens/pages/Login";
import SignUp from "../../screens/pages/SignUp";
import PinAuth from "../../auth/PinAuth";
import NoteDetail from "../../components/NoteDetail";
import EditNote from "../../components/EditNote";
import { NoteContextProvider } from "../../context/NoteContext";

const Stacks = createNativeStackNavigator();

const Screen = () => {
  return (
    <NoteContextProvider>
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
        <Stacks.Screen
          name='NoteDetail'
          component={NoteDetail}
          options={{ animation: "slide_from_bottom" }}
        />
        <Stacks.Screen
          name='EditNote'
          component={EditNote}
          options={{ animation: "slide_from_bottom" }}
        />
      </Stacks.Navigator>
    </NoteContextProvider>
  );
};

export default Screen;
