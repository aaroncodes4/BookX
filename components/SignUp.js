import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../basics/Button";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SignUp = () => {
  const [password, setPassword] = useState(false);
  const [checked, setChecked] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light }}>
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <View>
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              marginVertical: 12,
              fontWeight: 700,
              color: Colors.primary,
            }}
          >
            Create an account
          </Text>
        </View>
        {/* username */}
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 800,
              color: Colors.primary,
              marginVertical: 10,
            }}
          >
            Username
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
        {/* email */}
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 800,
              color: Colors.primary,
              marginVertical: 10,
            }}
          >
            Email address
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
              placeholder="Enter your email address"
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
        {/* phone */}
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 800,
              color: Colors.primary,
              marginVertical: 10,
            }}
          >
            Phone number
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
              placeholder="Enter your phone number"
              keyboardType="numeric"
              placeholderTextColor={Colors.primary}
              style={{
                width: "100%",
                fontSize: 18,
                color: Colors.primary,
              }}
            />
          </View>
        </View>

        {/* password */}

        <View style={{ marginBottom: 12 }}>
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
              flexDirection: "row",
              height: 50,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 10,
            }}
          >
            <TextInput
              placeholder="Enter your password"
              secureTextEntry={password}
              placeholderTextColor={Colors.primary}
              style={{
                width: "90%",
                fontSize: 18,
                color: Colors.primary,
              }}
            />
            <TouchableOpacity onPress={() => setPassword(!password)}>
              {password == false ? (
                  <Ionicons name="ios-eye" size={24} color="black" />
                  ) : (
                      <Ionicons name="ios-eye-off" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>
        </View>
        {/* confirm password */}

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 800,
              color: Colors.primary,
              marginVertical: 10,
            }}
          >
            Confirm password
          </Text>
          <View
            style={{
              borderColor: Colors.primary,
              borderWidth: 1,
              width: "100%",
              flexDirection: "row",
              height: 50,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 10,
            }}
          >
            <TextInput
              placeholder="Enter your password"
              secureTextEntry={password}
              placeholderTextColor={Colors.primary}
              style={{
                width: "90%",
                fontSize: 18,
                color: Colors.primary,
              }}
            />
            <TouchableOpacity onPress={() => setPassword(!password)}>
              {password == false ? (
                  <Ionicons name="ios-eye" size={24} color="black" />
                  ) : (
                  <Ionicons name="ios-eye-off" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 6,
            alignItems: "center",
          }}
        >
          <Checkbox
            style={{ marginRight: 10 }}
            value={checked}
            onValueChange={setChecked}
            color={checked ? Colors.primary : undefined}
          />
          <Text style={{ fontSize: 18, fontWeight: 600 }}>
            I agree to terms and conditions
          </Text>
        </View>
        <Button title="Sign up" filled style={{ marginVertical: 10 }} />
        {/* sign with */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View 
                style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: 'grey',
                    marginHorizontal: 10,
                }}
            />
            <Text style={{fontSize: 18, fontWeight: 500, color: 'grey'}}>Or Sign up with</Text>
            <View 
                style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: 'grey',
                    marginHorizontal: 10,
                }}
            />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10}}>
            <TouchableOpacity style={{paddingVertical: 10,paddingHorizontal: 60, borderRadius: 10, backgroundColor: Colors.primary}}>
                <MaterialCommunityIcons name="facebook" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={{paddingVertical: 10,paddingHorizontal: 60, borderRadius: 10, backgroundColor: Colors.primary}}>
                <Ionicons name="logo-google" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
        <Pressable>
            <Text
            style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: 600,
                color: Colors.primary,
            }}
            >
            Already have an account? Log in
            </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
