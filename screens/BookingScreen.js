import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";

const BookingScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ marginHorizontal: 18 }}>
      <Pressable
        onPress={() => navigation.navigate("Search")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
          marginVertical: 15,
          padding: 10,
          backgroundColor: Colors.secondary,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Search for event</Text>
        <Ionicons name="search" size={24} color="white" />
      </Pressable>

      <View style={{ marginVertical: 15 }}>
        <View
          style={{
            backgroundColor: Colors.secondary,
            padding: 18,
            flexDirection: "row",
            alignItems: "center",
            gap: 30,
          }}
        >
          <View style={styles.imgcont}>
            <Image 
              source={require('../assets/obd.jpg')}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
              }}
            />
          </View>
          <View>
            <Text style={{fontSize: 25, color: '#fff', fontWeight: 700}}>All Black party</Text>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: 500}}>Mandella Loungue</Text>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: 500}}>22nd August, 2023</Text>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: 500}}>GHC 20</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  imgcont: {
    width: 150,
    height: 100,
    backgroundColor: Colors.light,
    overflow: "hidden",
  },
});
