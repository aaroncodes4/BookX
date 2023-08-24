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
import Button from "../basics/Button";

const SignSection = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      disabled={true}
      style={{
        position: "absolute",
        top: 350,
        width: "90%",
        zIndex: 1,
        borderRadius: 20,
        left: 20,
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
          color: Colors.secondary,
        }}
      >
        Ready to explore?
      </Text>
      <Pressable
        style={{
          flexDirection: "column",
          gap: 20,
          justifyContent: "space-around",
        }}
      >
        <Button title="Sign Up" filled onPress={() => navigation.navigate("SignUp")}/>
        <Button
          onPress={() => navigation.navigate("LogIn")}
          title="Log In"
          filled
          style={{
            backgroundColor: Colors.secondary,
            borderColor: Colors.secondary,
          }}
        />
      </Pressable>
    </TouchableOpacity>
  );
};

export default SignSection;

const styles = StyleSheet.create({});
