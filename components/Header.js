import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}> 
      <Pressable style={styles.txtcont}>
        <Text style={styles.txt}>My Feeds</Text>
      </Pressable>
      <Pressable 
        onPress={() => navigation.navigate("Filtersports")}
        style={styles.txtcont}>
        <Text style={styles.txt}>Sports</Text>
      </Pressable>
      <Pressable 
        onPress={() => navigation.navigate("Filterconcert")}
        style={styles.txtcont}>
        <Text style={styles.txt}>Concerts</Text>
      </Pressable>
      <Pressable 
        onPress={() => navigation.navigate("Filtertheatre")}
        style={styles.txtcont}>
        <Text style={styles.txt}>Theatre</Text>
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    txt: {
        color: '#fff',
        fontSize: 18,
    },
    txtcont: {
        backgroundColor: Colors.secondary,
        padding: 10,
        borderRadius: 10,
    },
})