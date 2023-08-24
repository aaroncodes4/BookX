import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import SaveScreen from "./screens/SaveScreen";
import BookingScreen from "./screens/BookingScreen";
import { auth } from "./config";
import ProfileScreen from "./screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "./screens/SearchScreen";
import EventScreen from "./screens/EventScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Colors from "./constants/Colors";
import FilterSports from "./components/FilterSports";
import FilterConcert from "./components/FilterConcert";
import FilterTheatre from "./components/FilterTheatre";
import { onAuthStateChanged } from "firebase/auth";
import PaymentScreen from "./components/PaymentScreen";

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState(null);

  function BottomTabs() {
    return (
      <Tab.Navigator>
        {/* homescreen */}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarActiveTintColor: Colors.secondary,
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#303030" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />
        {/* saved screen */}
        <Tab.Screen
          name="Saved"
          component={SaveScreen}
          options={{
            tabBarLabel: "Saved",
            tabBarActiveTintColor: Colors.secondary,
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="heart" size={24} color="#303030" />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              ),
          }}
        />
        {/* booking screen */}
        <Tab.Screen
          name="Booking"
          component={BookingScreen}
          options={{
            tabBarLabel: "Booking",
            tabBarActiveTintColor: Colors.secondary,
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="notifications" size={24} color="#303030" />
              ) : (
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="black"
                />
              ),
          }}
        />
        {/* profile screen */}
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarActiveTintColor: Colors.secondary,
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person-sharp" size={24} color="#303030" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Event"
          component={EventScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Filtersports"
          component={FilterSports}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Filterconcert"
          component={FilterConcert}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Filtertheatre"
          component={FilterTheatre}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pay"
          component={PaymentScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
