import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Swipe = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/jj.jpg')}
        style={{
          resizeMode: 'cover',
          width: '100%'
        }}
      />
    </View>
  )
}

export default Swipe;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0f1b3d',
        height: 200,
        marginHorizontal: 18,
        marginTop: 18,
        alignItems: 'center',
        overflow: 'hidden',
    }
})