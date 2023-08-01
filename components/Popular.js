import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Popular = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Pressable style={{ marginLeft: 18, backgroundColor: "#0f1b3d", width: 230 }}>
        <View style={styles.imgcont}>
          <Image
            source={require('../assets/obd.jpg')}
            style={{
              resizeMode: "cover",
              width: "100%",
            }}
          />
        </View>
        <View style={{ padding: 15 }}>
          <Text style={{ color: "#fff", fontSize: 22 }}>Wet Republic</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <View style={styles.det}>
                <Entypo name="calendar" size={15} color="#ff6000" />
                <Text style={{ color: "#fff", paddingLeft: 5 }}>
                  22nd November, 2023
                </Text>
              </View>
              <View style={styles.det}>
                <Entypo name="location-pin" size={18} color="#ff6000" />
                <Text style={{ color: "#fff", paddingLeft: 4 }}>
                  Mim Obodanso
                </Text>
              </View>
              <View style={styles.det}>
                <Ionicons name="time-sharp" size={17} color="#ff6000" />
                <Text style={{ color: "#fff", paddingLeft: 5 }}>8:00pm</Text>
              </View>
            </View>
            <View>
              <AntDesign name="wechat" size={30} color="#fff" />
            </View>
          </View>
        </View>
      </Pressable>
      {/* event */}
      <Pressable style={{ marginLeft: 18, backgroundColor: "#0f1b3d", width: 230 }}>
        <View style={styles.imgcont}>
          <Image
            source={require("../assets/jj.jpg")}
            style={{
              resizeMode: "cover",
              width: "100%",
            }}
          />
        </View>
        <View style={{ padding: 15 }}>
          <Text style={{ color: "#fff", fontSize: 22 }}>Wet Republic</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <View style={styles.det}>
                <Entypo name="calendar" size={15} color="#ff6000" />
                <Text style={{ color: "#fff", paddingLeft: 5 }}>
                  22nd November, 2023
                </Text>
              </View>
              <View style={styles.det}>
                <Entypo name="location-pin" size={18} color="#ff6000" />
                <Text style={{ color: "#fff", paddingLeft: 4 }}>
                  Mim Obodanso
                </Text>
              </View>
              <View style={styles.det}>
                <Ionicons name="time-sharp" size={17} color="#ff6000" />
                <Text style={{ color: "#fff", paddingLeft: 5 }}>8:00pm</Text>
              </View>
            </View>
            <View>
              <AntDesign name="wechat" size={30} color="#fff" />
            </View>
          </View>
        </View>
      </Pressable>
      {/* event */}
      <Pressable style={{ marginHorizontal: 18, marginRight: 18, backgroundColor: "#0f1b3d", width: 230 }}>
        <View style={styles.imgcont}>
          <Image
            source={require("../assets/jj.jpg")}
            style={{
              resizeMode: "cover",
              width: "100%",
            }}
          />
        </View>
        <View style={{ padding: 15 }}>
          <Text style={{ color: "#fff", fontSize: 22 }}>Wet Republic</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <View style={styles.det}>
                <Entypo name="calendar" size={15} color="#ff6000" />
                <Text style={{ color: "#fff", paddingLeft: 5 }}>
                  22nd November, 2023
                </Text>
              </View>
              <View style={styles.det}>
                <Entypo name="location-pin" size={18} color="#ff6000" />
                <Text style={{ color: "#fff", paddingLeft: 4 }}>
                  Mim Obodanso
                </Text>
              </View>
              <View style={styles.det}>
                <Ionicons name="time-sharp" size={17} color="#ff6000" />
                <Text style={{ color: "#fff", paddingLeft: 5 }}>8:00pm</Text>
              </View>
            </View>
            <View>
              <AntDesign name="wechat" size={30} color="#fff" />
            </View>
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default Popular;

const styles = StyleSheet.create({
  imgcont: {
    width: 230,
    height: 170,
    backgroundColor: "#ff6000",
    overflow: "hidden",
  },
  det: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
});
