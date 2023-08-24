import { StyleSheet, Text, View, Pressable, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Colors from "../constants/Colors";
import { auth } from "../config";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";



const ProfileScreen = () => {


    
 const navigation = useNavigation();
  const handleLogout = () => {
    //log out the user
    signOut(auth)
      .then(() => {
        navigation.navigate("LogIn");
      })
      .catch((error) => {
        // An error happened.
      });
      
      // Sign-out successful.
    
  };

  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{ position: "relative" }}>
        <View style={styles.coverpic}>
          <Image 
            source={require('../assets/jj.jpg')}
            style={{
              resizeMode: 'cover',
              width: "100%",
              height: "100%",
              opacity: 0.7,
            }}
          />
        </View>
        <View style={styles.profilepic}>
          <Image 
            source={require('../assets/dalton.jpg')}
            style={{
              resizeMode: 'cover',
              width: "100%",
              height: "100%",
            }}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 90,
          marginHorizontal: 18,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 22, color: Colors.secondary, fontWeight: 600, }}>
            Aaron Apraku
          </Text>
          <Text style={{ fontSize: 15, color: Colors.secondary, fontWeight: 600, paddingBottom: 5 }}>
            @aaronsimeoni
          </Text>
          <Text style={{ fontSize: 15, maxWidth: "90%" }}>
            KNUST || Computer Science || Music || Teamwork
          </Text>
        </View>
        <Pressable
          style={{
            backgroundColor: "transparent",
            borderColor: Colors.secondary,
            borderWidth: 2,
            borderRadius: 10,
            padding: 10,
          }}
        >
          <Text style={{ fontWeight: 500 }}>Edit profile</Text>
        </Pressable>
      </View>

      <View style={{marginVertical: 30, flexDirection: 'column', gap: 20,}}>
          <Pressable style={styles.cont}>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
              <MaterialIcons name="payment" size={24} color="#303030" />
              <Text style={styles.txt}>Payment method</Text>
            </View>
            <FontAwesome name="angle-right" size={24} color="#303030"/>
          </Pressable>
          <Pressable style={styles.cont}>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
              <MaterialIcons name="preview" size={24} color="#303030" />
              <Text style={styles.txt}>Reviews</Text>
            </View>
            <FontAwesome name="angle-right" size={24} color="#303030"/>
          </Pressable>
          <Pressable style={styles.cont}>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
              <AntDesign name="setting" size={24} color="#303030" />
              <Text Text style={styles.txt}>Settings</Text>
            </View>
            <FontAwesome name="angle-right" size={24} color="#303030"/>
          </Pressable>
          <Pressable style={styles.cont}>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
              <FontAwesome name="handshake-o" size={22} color="#303030" />
              <Text style={styles.txt}>Invite friends</Text>
            </View>
            <FontAwesome name="angle-right" size={24} color="#303030" />
          </Pressable>
          {/*  */}
          <Pressable style={styles.cont}>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
              <FontAwesome5 name="cookie" size={22} color="#303030" />
              <Text style={styles.txt}>Cookies</Text>
            </View>
            <FontAwesome name="angle-right" size={24} color="#303030" />
          </Pressable>
          {/*  */}
          <Pressable style={styles.cont}>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
              <Octicons name="code-of-conduct" size={24} color="#303030" />
              <Text style={styles.txt}>Terms</Text>
            </View>
            <FontAwesome name="angle-right" size={24} color="#303030" />
          </Pressable>
          {/*  */}
          <Pressable style={styles.cont}>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
              <MaterialIcons name="cast-connected" size={22} color="#303030" />
              <Text style={styles.txt}>Connect with us</Text>
            </View>
            <FontAwesome name="angle-right" size={24} color="#303030" />
          </Pressable>
          {/*  */}
          <Pressable style={styles.cont}>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <Entypo name="info" size={24} color="#303030" />
            <TouchableOpacity style={styles.txt}
            onPress={handleLogout}
            >
              <Text style={{fontSize: 16, fontWeight: 500, color: 'red'}} 
              >
                Logout
              </Text>
            </TouchableOpacity>
            </View>
            <FontAwesome name="angle-right" size={24} color="#303030" />
          </Pressable>
      </View>
      <View style={{flexDirection: 'row', gap: 2, alignItems: 'center', justifyContent: 'center', marginVertical: 15}}>
        <FontAwesome5 name="copyright" size={13} color="#303030" />
        <Text style={{fontSize: 20, fontWeight: 600, paddingBottom: 5, color: Colors.secondary}}>aaroncodes4</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  coverpic: {
    width: "100%",
    height: 200,
    backgroundColor: "black",
  },
  profilepic: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderColor: Colors.secondary,
    borderWidth: 3,
    backgroundColor: "grey",
    position: "absolute",
    bottom: -70,
    left: "34%",
    overflow: 'hidden'
  },
  txt: {
    fontSize: 18,
    fontWeight: 600,
    color: Colors.secondary,
    marginHorizontal: 5,
  },
  cont: {
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  }
});
