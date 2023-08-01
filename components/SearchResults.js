import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  toLowerCase,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SearchResults = ({ data, input, setInput }) => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (item.event.toLowerCase().includes(input.toLowerCase()) || item.venue.toLowerCase().includes(input.toLowerCase())) {
            if (input === "") {
              return null;
            }

            return (
              <Pressable
                onPress={() => {
                  navigation.navigate("Event", {
                    eventName: item.event,
                    eventDate: item.date,
                    eventVenue: item.venue,
                    eventTime: item.time,
                    eventRate: item.rate,
                  });
                }}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <View style={styles.imgcont}>
                  <Image
                    source={require("../assets/obd.jpg")}
                    style={{
                      resizeMode: "cover",
                      width: "100%",
                    }}
                  />
                </View>
                <View style={{ width: "80%" }}>
                  <Text
                    style={{ fontSize: 24, fontWeight: 700, color: "#ff6000" }}
                  >
                    {item.event}
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: 500 }}>
                    {item.date}
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: 500 }}>
                    {item.venue}
                  </Text>
                  <Text style={{ fontSize: 15, fontWeight: 500 }}>
                    {item.time}
                  </Text>
                </View>
              </Pressable>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  imgcont: {
    width: 170,
    height: 130,
    backgroundColor: "#ff6000",
    overflow: "hidden",
    marginHorizontal: 18,
    marginBottom: 18,
  },
});
