import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Colors  from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation()
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Main')
    }, 3000)
    return() => clearTimeout(timer)
  }, [])
  return (
    <LinearGradient 
      style={{
        flex: 1,
      }}
      colors={[Colors.dark, Colors.secondary]}
    >
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image 
          source={require('../assets/ronn-alogo.png')}
          style={{
            width: 300,
            height: 300,
          }}
        />
      </View>
    </LinearGradient>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({})