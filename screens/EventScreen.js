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

const EventScreen = ({data}) => {
    const route = useRoute()
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView style={{ marginHorizontal: 18, position: "relative" }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <TouchableOpacity>
            <Back loc={"Search"}/>
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 100,
              fontSize: 22,
              fontWeight: 700,
              color: "#ff6000",
              paddingVertical: 20,
            }}
          >
            Event Details
          </Text>
        </View>
        <View>
          <View style={styles.imgview}>
            <Image
              source={require('../assets/obd.jpg')}
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
                color: "#ff6000",
              }}
            >
              {route.params.eventName}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingBottom: 10,
                fontWeight: 500,
                color: "#0f1b3d",
              }}
            >
              {route.params.eventDate}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingBottom: 10,
                fontWeight: 500,
                color: "#0f1b3d",
              }}
            >
              {route.params.eventVenue}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingBottom: 10,
                fontWeight: 500,
                color: "#0f1b3d",
              }}
            >
              {route.params.eventTime}
            </Text>
            
            <Text
              style={{
                fontSize: 20,
                paddingBottom: 10,
                fontWeight: 500,
                color: "#0f1b3d",
              }}
            >
              {route.params.eventRate}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              color: "#0f1b3d",
              fontWeight: 400,
              lineHeight: 30,
            }}
          >
            Monthly stand-up night the Comedy Cabaret enters guests into a free
            raffle for beer when they buy a ticket. This bonus creates an extra
            incentive for potential attendees, and pushes them from the maybe
            category to definitely going. The event description is also funny
            and light-hearted — perfectly on message for a comedy event. “The
            next outstanding show is Monday March 23rd at 8pm. The Comedy
            Cabaret offers a Laffy Raffy Raffle. To enter all you have to do is
            RSVP/Join this event, and then on the night of show, be present in
            the flesh and your name will be entered into a draw for free beer!
            (DISCLAIMER: If you're not there when we draw your name you forfeit
            your mouth-watering super-thirst quenching beer. Also must 19 years
            of age or older to enter).”
          </Text>
          <Pressable>
            <Text style={styles.btn}>Book Now</Text>
          </Pressable>
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
        <Pressable style={{ marginHorizontal: 18, marginBottom: 15 }}>
          <View style={styles.container}>
            <View style={styles.imgcont}>
              <Image
                source={require("../assets/obd.jpg")}
                style={{
                  resizeMode: "cover",
                  width: "100%",
                }}
              />
            </View>
            <View style={styles.content}>
              <Text style={{ color: "#ff6000", fontSize: 25, fontWeight: 600 }}>
                Devoid 2.0
              </Text>
              <View style={{ marginTop: 10 }}>
                <Text style={{ color: "#fff", fontSize: 15 }}>
                  18th September, 2023
                </Text>
                <Text style={{ color: "#fff", fontSize: 15 }}>SG Mall</Text>
                <Text style={{ color: "#fff", fontSize: 15 }}>9:00pm</Text>
              </View>
            </View>
          </View>
        </Pressable>
        <Pressable style={{ marginHorizontal: 18, marginBottom: 15 }}>
          <View style={styles.container}>
            <View style={styles.imgcont}>
              <Image
                source={require("../assets/obd.jpg")}
                style={{
                  resizeMode: "cover",
                  width: "100%",
                }}
              />
            </View>
            <View style={styles.content}>
              <Text style={{ color: "#ff6000", fontSize: 25, fontWeight: 600 }}>
                Devoid 2.0
              </Text>
              <View style={{ marginTop: 10 }}>
                <Text style={{ color: "#fff", fontSize: 15 }}>
                  18th September, 2023
                </Text>
                <Text style={{ color: "#fff", fontSize: 15 }}>SG Mall</Text>
                <Text style={{ color: "#fff", fontSize: 15 }}>9:00pm</Text>
              </View>
            </View>
          </View>
        </Pressable>
        <Pressable style={{ marginHorizontal: 18, marginBottom: 15 }}>
          <View style={styles.container}>
            <View style={styles.imgcont}>
              <Image
                source={require("../assets/obd.jpg")}
                style={{
                  resizeMode: "cover",
                  width: "100%",
                }}
              />
            </View>
            <View style={styles.content}>
              <Text style={{ color: "#ff6000", fontSize: 25, fontWeight: 600 }}>
                Devoid 2.0
              </Text>
              <View style={{ marginTop: 10 }}>
                <Text style={{ color: "#fff", fontSize: 15 }}>
                  18th September, 2023
                </Text>
                <Text style={{ color: "#fff", fontSize: 15 }}>SG Mall</Text>
                <Text style={{ color: "#fff", fontSize: 15 }}>9:00pm</Text>
              </View>
            </View>
          </View>
        </Pressable>
        <Pressable style={{ marginHorizontal: 18, marginBottom: 15 }}>
          <View style={styles.container}>
            <View style={styles.imgcont}>
              <Image
                source={require("../assets/obd.jpg")}
                style={{
                  resizeMode: "cover",
                  width: "100%",
                }}
              />
            </View>
            <View style={styles.content}>
              <Text style={{ color: "#ff6000", fontSize: 25, fontWeight: 600 }}>
                Devoid 2.0
              </Text>
              <View style={{ marginTop: 10 }}>
                <Text style={{ color: "#fff", fontSize: 15 }}>
                  18th September, 2023
                </Text>
                <Text style={{ color: "#fff", fontSize: 15 }}>SG Mall</Text>
                <Text style={{ color: "#fff", fontSize: 15 }}>9:00pm</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              right: 0,
              backgroundColor: "#fff",
              padding: 18,
              borderRadius: 50,
            }}
          >
            <AntDesign name="wechat" size={40} color="#ff6000" />
          </View>
        </Pressable>
      </ScrollView>
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
