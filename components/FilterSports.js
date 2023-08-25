import { StyleSheet, Text, View, FlatList, Pressable, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import data from "../data";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const FilterSports = () => {
    const navigation = useNavigation();
    const {width, height} = Dimensions.get('window');
    const Data = data;
    const filterd = Data.filter(item => item.cat === "sports")
  return (
    <SafeAreaView style={{marginBottom: 80}}>
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
        <Text style={{fontSize: 18, color: 'grey'}}>Search for event</Text>
      </Pressable>
      <ScrollView style={{marginHorizontal: 20}}>
          {filterd.map(item => {
            return (
              <Pressable
              onPress={() =>
                navigation.navigate("Event", {
                  eventName: item.event,
                  eventDate: item.date,
                  eventTime: item.time,
                  eventVenue: item.venue,
                  eventRate: item.rate,
                })
              }
              style={{
                marginVertical: 10,
                flexDirection: "row",
                backgroundColor: "#fff",
              }}
            >
         
                <View style={styles.imgcont}>
                  <Image
                    source={require("../assets/obd.jpg")}
                    style={{
                      width: "100%",
                      height: height/4,
                      width: width - 280,
                    }}
                  />
                </View>
                <View style={{padding: 10}}>
                  <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text
                      style={{ width: 200, fontSize: 25, color: "#000", fontWeight: 700 }}
                    >
                      {item.event}
                    </Text>
                    <Entypo name="heart-outlined" size={24} color="red" />
                  </View>
                  <View style={{flexDirection: 'row', alignContent: 'center', gap: 10, marginTop: 7}}>
                    <MaterialIcons name="stars" size={24} color="black" />
                    <Text style={{fontSize: 20, fontWeight: 500}}>{item.rate}</Text>
                    <View style={{backgroundColor: Colors.primary, borderRadius: 5, width: 100}}>
                      <Text style={{textAlign: 'center', fontSize: 20}}>Popular</Text>
                    </View>
                  </View>
                  <Text
                    style={{ fontSize: 18, color: "#000", fontWeight: 500 }}
                  >
                    {item.venue}
                  </Text>
                  <Text
                    style={{ fontSize: 18, color: "#000", fontWeight: 500 }}
                  >
                    {item.date}
                  </Text>
                  <Text
                    style={{ fontSize: 18, color: "#000", fontWeight: 500 }}
                  >
                    {item.time}
                  </Text>

                  <Text
                    style={{ fontSize: 18, color: "#000", fontWeight: 500 }}
                  >
                    {item.price}
                  </Text>
                  <Text
                    style={{ fontSize: 18, color: "grey", fontWeight: 500 }}
                  >
                    Contact
                  </Text>
                  <TouchableOpacity onPress={() => navigation.navigate("Pay")} style={{backgroundColor: "grey", padding: 6, marginTop: 10}}>
                    <Text style={{fontSize: 25, color: '#fff', textAlign: 'center'}}>Book now</Text>
                  </TouchableOpacity>
                </View>
            </Pressable>
            )
          })}
        </ScrollView>
    </SafeAreaView>
  )
}

export default FilterSports;

const styles = StyleSheet.create({

})