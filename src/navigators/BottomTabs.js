import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AccountScreen,
  BookmarkScreen,
  CartScreen,
  HomeScreen,
} from "../screens";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Display } from "../utils";
import { Colors } from "../contants";

const BottomTabs = createBottomTabNavigator();

export default () => (
  <BottomTabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        position: "absolute",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: Display.setHeight(7),
        backgroundColor: Colors.DEFAULT_WHITE,
        elevation: 5,
      },
      tabBarItemStyle: { padding: 12 },
      tabBarShowLabel: false,
      tabBarActiveTintColor: Colors.DEFAULT_GREEN,
      tabBarInactiveTintColor: Colors.INACTIVE_GREY,
    }}
  >
    <BottomTabs.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="home-outline" size={25} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Bookmark"
      component={BookmarkScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="bookmark-outline" size={25} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Cart"
      component={CartScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="cart-outline" size={25} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="person-outline" size={25} color={color} />
        ),
      }}
    />
  </BottomTabs.Navigator>
);
