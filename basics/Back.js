import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Back = (props) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cont}
      onPress={() => navigation.navigate(props.loc)}
    >
      <AntDesign name="left" size={20} color="black" />
    </TouchableOpacity>
  );
};

export default Back;

const styles = StyleSheet.create({});
