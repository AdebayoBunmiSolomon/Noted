import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Carousel from "../../components/Carousel";
import Tab from "../tab/Tab";

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
    </Stacks.Navigator>
  );
};

export default Screen;
