import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const SignSection = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
        disabled={true}
      style={{
        position: "absolute",
        top: 350,
        width: "91%",
        zIndex: 1,
        left: 20,
        right: 20,
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          fontSize: 40,
          textAlign: "center",
          paddingBottom: 30,
          fontWeight: 800,
          color: Colors.primary,
        }}
      >
        Ready to explore?
      </Text>
      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={{
            backgroundColor: Colors.secondary,
            paddingVertical: 20,
            paddingHorizontal: 40,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: 600 }}>
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate("LogIn")}
          style={{
            backgroundColor: Colors.primary,
            paddingVertical: 20,
            paddingHorizontal: 40,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: 600 }}>
            Log in
          </Text>
        </TouchableOpacity>
      </Pressable>
    </TouchableOpacity>
  );
};

export default SignSection ;

const styles = StyleSheet.create({});
