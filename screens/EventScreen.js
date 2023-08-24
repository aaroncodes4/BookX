import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import Back from "../basics/Back";
import Colors from "../constants/Colors";
import Button from "../basics/Button";
import EventsNearby from "../components/EventsNearby";

const EventScreen = ({ data }) => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ marginHorizontal: 18, position: "relative" }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <TouchableOpacity>
              <Back loc={"Search"} />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 100,
                fontSize: 22,
                fontWeight: 700,
                color: Colors.secondary,
                paddingVertical: 20,
              }}
            >
              Event Details
            </Text>
          </View>
          <View>
            <View style={styles.imgview}>
              <Image
                source={require("../assets/obd.jpg")}
                style={{
                  resizeMode: "cover",
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 33,
                  paddingBottom: 10,
                  fontWeight: 700,
                  color: Colors.primary,
                }}
              >
                {route.params.eventName}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  paddingBottom: 10,
                  fontWeight: 500,
                  color: Colors.secondary,
                }}
              >
                {route.params.eventDate}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  paddingBottom: 10,
                  fontWeight: 500,
                  color: Colors.secondary,
                }}
              >
                {route.params.eventVenue}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  paddingBottom: 10,
                  fontWeight: 500,
                  color: Colors.secondary,
                }}
              >
                {route.params.eventTime}
              </Text>

              <Text
                style={{
                  fontSize: 20,
                  paddingBottom: 10,
                  fontWeight: 500,
                  color: Colors.secondary,
                }}
              >
                {route.params.eventRate}
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: Colors.secondary,
                borderBottomWidth: 1,
                marginVertical: 10,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                color: Colors.secondary,
                fontWeight: 400,
                lineHeight: 30,
                padding: 10,
              }}
            >
              {route.params.eventDet}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Pay")}>
              <Button
                title="Book Now"
                filled
                style={{
                  marginVertical: 20,
                  backgroundColor: Colors.secondary,
                  borderColor: Colors.secondary,
                }}
              />
            </TouchableOpacity>
          </View>

          {/* related events */}

          <Text
            style={{
              paddingBottom: 20,
              color: "#0f1b3d",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Related events
          </Text>
        </View>
        <EventsNearby />
      </ScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 10,
          bottom: 40,
          backgroundColor: Colors.secondary,
          padding: 18,
          borderRadius: 50,
        }}
      >
        <AntDesign name="wechat" size={40} color="#ff6000" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0f1b3d",
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  imgcont: {
    width: 150,
    height: 100,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  imgview: {
    width: "100%",
    height: "auto",
    backgroundColor: "#fff",
    overflow: "hidden",
    marginBottom: 20,
  },
  btn: {
    padding: 15,
    backgroundColor: "#ff6000",
    borderRadius: 10,
    marginVertical: 18,
    marginHorizontal: 100,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: 700,
  },
});
