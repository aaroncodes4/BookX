import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import Swipe from "../components/Swipe";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Icons from "react-native-vector-icons/FontAwesome";
import Popular from "../components/Popular";
import EventsNearby from "../components/EventsNearby";
import Colors from "../constants/Colors";
import SignSection from "../components/SignSection";

const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const changeModalVisibile = (bool) => {
    setIsModalVisible(bool);
  };

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "BookX.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
      },
      headerStyle: {
        backgroundColor: "#ff6000",
        height: 110,
      },
      headerTitleAlign: "center",
      headerLeft: () => (
        <Entypo name="menu" size={30} color="#fff" style={{ marginLeft: 18 }} />
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => setIsModalVisible(true)}
          style={{
            flexDirection: "column",
            alignItems: "center",
            gap: -5,
          }}
        >
          <Ionicons
            name="person-circle-sharp"
            size={40}
            color="#fff"
            style={{ marginRight: 18 }}
          />
          <Text
            style={{
              fontSize: 10,
              fontWeight: 500,
              color: "#fff",
              paddingRight: 18,
            }}
          >
            Sign up/Log in
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <ScrollView>
      {/* search area */}
      <Pressable
        onPress={() => navigation.navigate("Search")}
        style={{
          borderColor: "#ff6000",
          height: 50,
          borderWidth: 2,
          borderRadius: 40,
          marginVertical: 10,
          marginHorizontal: 19,
          paddingHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Ionicons name="search" size={24} color="grey" />
        <TextInput placeholder="Search for events" fontSize={18} />
      </Pressable>
      {/* end of search area */}
      <Header />

      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => changeModalVisibile(false)}
      >
        <SignSection />
      </Modal>

      <Swipe />
      <View style={styles.main}>
        <Text style={styles.pop}>Popular events</Text>
        <Text style={styles.popp}>View all</Text>
      </View>
      <Popular />
      <Swipe />
      <View style={styles.main}>
        <Text style={styles.pop}>Events Nearby you</Text>
        <Pressable>
          <Text style={styles.popp}>View all</Text>
        </Pressable>
      </View>
      <EventsNearby />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 18,
  },
  pop: {
    fontSize: 20,
    color: "#ff6000",
    fontWeight: 600,
  },
  popp: {
    fontSize: 15,
    color: "#ff6000",
    fontWeight: 600,
  },
});
