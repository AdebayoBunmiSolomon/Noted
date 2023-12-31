import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../../screens/tabViews/HomePage/HomePage";
import ReligionNotes from "../../screens/tabViews/Religion/ReligionNotes";
import HomeNotes from "../../screens/tabViews/Home/HomeNotes";
import WorkNotes from "../../screens/tabViews/Work/WorkNotes";
import Settings from "../../screens/tabViews/Settings/Settings";
import Icon from "react-native-vector-icons/FontAwesome5";
import { NoteContext } from "../../context/NoteContext";
import { themeSettings } from "../../screens/tabViews/Settings/Theme";

const Tabs = createBottomTabNavigator();

const Tab = () => {
  const { isDarkMode } = useContext(NoteContext);
  return (
    <Tabs.Navigator
      initialRouteName='Home Page'
      backBehavior={"initialRoute"}
      screenOptions={({ route }: any) => ({
        tabBarStyle: {},
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === "Religion") {
            iconName = focused ? "clipboard-list" : "bible";
          } else if (route.name === "Home") {
            iconName = focused ? "clipboard-list" : "building";
          } else if (route.name === "Home Page") {
            iconName = focused ? "house-user" : "home";
          } else if (route.name === "Work") {
            iconName = focused ? "clipboard-list" : "toolbox";
          } else if (route.name === "Settings") {
            iconName = focused ? "assistive-listening-systems" : "tools";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "gray",
      })}>
      <Tabs.Screen
        name='Religion'
        component={ReligionNotes}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name='Home'
        component={HomeNotes}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name='Home Page'
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name='Work'
        component={WorkNotes}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: "orange" },
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export default Tab;
