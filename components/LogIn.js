import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Touchable,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import Button from "../basics/Button";
import Checkbox from "expo-checkbox";

const LogIn = () => {
  const [checked, setChecked] = useState(false);
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center" }}
    >
      <View style={{ flex: 1, margin: 20 }}>
        <View style={{backgroundColor: '#fff', width: '100%', height: 100, marginBottom: 200, marginTop: 50}}>
            <Image 
                source={require('../assets/Login-amico.png')}
                style={{
                    width: "100%",
                    height: 300,
                    resizeMode: 'contain',
                    
                }}
            />
        </View>
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            marginVertical: 12,
            fontWeight: 700,
            color: Colors.primary,
          }}
        >
          Log In
        </Text>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 800,
              color: Colors.primary,
              marginVertical: 10,
            }}
          >
            Username/Email
          </Text>
          <View
            style={{
              borderColor: Colors.primary,
              borderWidth: 1,
              width: "100%",
              height: 50,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Enter your username"
              keyboardType="email-address"
              placeholderTextColor={Colors.primary}
              style={{
                width: "100%",
                fontSize: 18,
                color: Colors.primary,
              }}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 800,
              color: Colors.primary,
              marginVertical: 10,
            }}
          >
            Password
          </Text>
          <View
            style={{
              borderColor: Colors.primary,
              borderWidth: 1,
              width: "100%",
              height: 50,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Enter your password"
              keyboardType="email-address"
              placeholderTextColor={Colors.primary}
              style={{
                width: "100%",
                fontSize: 18,
                color: Colors.primary,
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Checkbox 
            value={checked} 
            onValueChange={setChecked}
            color={checked ? Colors.primary : undefined}
          />
          <TouchableOpacity>
            <Text style={{fontSize: 18, fontWeight: 500, color: 'grey'}}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <Button title="Log In" filled style={{ marginVertical: 20 }} />
        <View 
            style={{
                borderWidth: 1,
                height: 1,
                borderColor: 'grey',
                marginVertical: 20,
            }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LogIn;

const styles = StyleSheet.create({});
