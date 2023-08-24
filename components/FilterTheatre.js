import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Pressable,
    ScrollView,
    Image,
  } from "react-native";
  import React from "react";
  import { useNavigation } from "@react-navigation/native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import data from "../data";
  import Colors from "../constants/Colors";
  import { Ionicons } from "@expo/vector-icons";
  
  const FilterTheatre = () => {
    const navigation = useNavigation();
    const Data = data;
    const filterd = Data.filter((item) => item.cat === "theatre");
    return (
      <SafeAreaView style={{ marginBottom: 80, marginTop: 10 }}>
        <Pressable
          onPress={() => navigation.navigate("Search")}
          style={{
            borderColor: Colors.secondary,
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
          <Text style={{ fontSize: 18, color: "grey" }}>Search for event</Text>
        </Pressable>
        <ScrollView>
          {filterd.map((item) => {
            return (
              <Pressable
                key={item.id}
                onPress={() =>
                  navigation.navigate("Event", {
                    eventName: item.event,
                    eventDate: item.date,
                    eventTime: item.time,
                    eventVenue: item.venue,
                    eventRate: item.rate,
                    eventDet: item.det,
                  })
                }
                style={{ marginVertical: 15 }}
              >
                <View
                  style={{
                    backgroundColor: Colors.primary,
                    padding: 18,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 30,
                  }}
                >
                  <View style={styles.imgcont}>
                    <Image
                      source={require("../assets/obd.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "cover",
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{ fontSize: 25, color: "#fff", fontWeight: 700 }}
                    >
                      {item.event}
                    </Text>
                    <Text
                      style={{ fontSize: 18, color: "#fff", fontWeight: 500 }}
                    >
                      {item.venue}
                    </Text>
                    <Text
                      style={{ fontSize: 18, color: "#fff", fontWeight: 500 }}
                    >
                      {item.date}
                    </Text>
                    <Text
                      style={{ fontSize: 18, color: "#fff", fontWeight: 500 }}
                    >
                      {item.time}
                    </Text>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default FilterTheatre;
  
  const styles = StyleSheet.create({
    imgcont: {
      width: 150,
      height: 100,
      backgroundColor: Colors.light,
      overflow: "hidden",
    },
  });
  