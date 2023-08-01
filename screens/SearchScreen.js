import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SearchResults from '../components/SearchResults';

const SearchScreen = () => {
  
  const navigaton = useNavigation();
  const [input, setInput] = useState("")
  const data = [
    {
        id: "0",
        event: "Devoid 2.0",
        flyer: "../assets/obd.jpg",
        date: "21st August, 2023",
        venue: "SG Mall",
        rate: "SINGLE GHC 10 || DOUBLE GHC 15",
        time: "9:30pm"
    },
     {
        id: "1",
        event: "Wet Republic",
        flyer: "../assets/jj.jpg",
        date: "2nd September, 2023",
        venue: "Obodanso",
        rate: "GHC 20 || GHC 30",
        time: "6:00pm"
    },
     {
        id: "2",
        event: "Vodafone Turn Up",
        flyer: "../assets/obd.jpg",
        date: "29th July, 2023",
        venue: "KNUST",
        rate: "GHC 50 || GHC 80",
        time: "8:00pm"
    }
]
  
  return (
    <SafeAreaView>
      <Pressable 
      style={{
        borderColor: "#ff6000",
        height: 50,
        borderWidth: 2,
        borderRadius: 40,
        marginVertical: 18,
        marginHorizontal: 19,
        paddingHorizontal: 20,
        flexDirection:'row',
        alignItems: 'center',
        gap: 10,
      }}>
        <Ionicons name="search" size={24} color="grey"/>
        <TextInput 
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholder="Search for events"
          fontSize={18}
          /> 
       </Pressable>
       <SearchResults data={data} input={input} setInput={setInput}/>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})