import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../basics/Button";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { auth } from "../config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 // const [username, setUsername] = useState("");
 // const [checked, setChecked] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleSignUp = async ()=>{
    if(password !== confirmPassword){
      Alert.alert("Passwords don't match")
    }

    try {
    
    
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(user);
        navigation.navigate("Home");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

  
    } catch (error) {
      console.log(error);
      console.log("something went wrong")
    }
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light }}>
      <View style={{ flex: 1, marginHorizontal: 20, justifyContent: 'center' }}>
      <View style={{backgroundColor: '#fff', width: '100%', height: 100, marginBottom: 110,}}>
            <Image 
                source={require('../assets/sign.png')}
                style={{
                    width: "100%",
                    height: 250,
                    resizeMode: 'contain',
                    
                }}
            />
        </View>
        <View>
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              marginVertical: 12,
              fontWeight: 700,
              color: Colors.secondary,
            }}
          >
            Create an account
          </Text>
        </View>
    
        {/* email */}
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 800,
              color: Colors.secondary,
              marginVertical: 10,
            }}
          >
            Email address
          </Text>
          <View
            style={{
              borderColor: Colors.secondary,
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
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor={Colors.secondary}
              style={{
                width: "100%",
                fontSize: 18,
                color: Colors.secondary,
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
              color: Colors.secondary,
              marginVertical: 10,
            }}
          >
            Password
          </Text>
          <View
            style={{
              borderColor: Colors.secondary,
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
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor={Colors.secondary}
              style={{
                width: "90%",
                fontSize: 18,
                color: Colors.secondary,
              }}
            />
            {/* <TouchableOpacity onPress={() => setPassword(!password)}>
              {password == false ? (
                <Ionicons name="ios-eye-off" size={24} color="black" />
                ) : (
                    <Ionicons name="ios-eye" size={24} color="black" />
              )}
            </TouchableOpacity> */}
          </View>
        </View>
        {/* confirm password */}

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 800,
              color: Colors.secondary,
              marginVertical: 10,
            }}
          >
            Confirm password
          </Text>
          <View
            style={{
              borderColor: Colors.secondary,
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
            {/* <TextInput
              placeholder="Enter your password"
              secureTextEntry
             
             
value={confirmPassword}
              onChangeText={(e) => setConfirmPassword(e.target.value)}
              placeholderTextColor={Colors.secondary}
              style={{
                width: "90%",
                fontSize: 18,
                color: Colors.secondary,
              }}
            /> */}
            <TextInput
              placeholder="Enter your password"
              secureTextEntry 
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              placeholderTextColor={Colors.secondary}
              style={{
                width: "90%",
                fontSize: 18,
                color: Colors.secondary,
              }}
            />

            <TouchableOpacity onPress={() => setConfirmPassword(!confirmPassword)}>
              {confirmPassword == true ? (
                <Ionicons name="ios-eye-off" size={24} color="black" />
                ) : (
                <Ionicons name="ios-eye" size={24} color="black" />
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
          {/* <Checkbox
            style={{ marginRight: 10 }}
            value={checked}
            onValueChange={setChecked}
            color={checked ? Colors.primary : undefined}
          />
          <Text style={{ fontSize: 18, fontWeight: 600 }}>
            I agree to terms and conditions
          </Text> */}

        </View>
        <Button title="Sign up" filled style={{ marginVertical: 10 }} onPress={handleSignUp}
         />

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

        {/* other sign ups */}

        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10}}>
            <TouchableOpacity style={{paddingVertical: 10,paddingHorizontal: 60, borderRadius: 10, backgroundColor: Colors.secondary}}>
                <MaterialCommunityIcons name="facebook" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={{paddingVertical: 10,paddingHorizontal: 60, borderRadius: 10, backgroundColor: Colors.secondary}}>
                <Ionicons name="logo-google" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
        <Pressable onPress={() => navigation.navigate("LogIn")}>
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
