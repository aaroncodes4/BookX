import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}> 
      <Pressable style={styles.txtcont}>
        <Text style={styles.txt}>My Feeds</Text>
      </Pressable>
      <Pressable style={styles.txtcont}>
        <Text style={styles.txt}>Sports</Text>
      </Pressable>
      <Pressable style={styles.txtcont}>
        <Text style={styles.txt}>Concerts</Text>
      </Pressable>
      <Pressable style={styles.txtcont}>
        <Text style={styles.txt}>Theatre</Text>
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0a0f21",
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
        backgroundColor: '#ff6000',
        padding: 10,
        borderRadius: 10,
    },
})