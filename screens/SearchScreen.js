import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SearchResults from '../components/SearchResults';
import Colors from '../constants/Colors';
import data from '../data';

const SearchScreen = () => {
  
  const navigaton = useNavigation();
  const [input, setInput] = useState("")
  const Data = data;

  return (
    <SafeAreaView>
      <Pressable 
      style={{
        borderColor: Colors.secondary,
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