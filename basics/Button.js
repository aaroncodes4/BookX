import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const Button = (props) => {
    const filledBgColor = props.color || Colors.primary;
    const outlinedColor = Colors.light;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? Colors.light : Colors.primary;

  return (
    <TouchableOpacity style={{
        ...styles.button,
        ...{backgroundColor: bgColor},
        ...props.style
    }}
        onPress={props.onPress}
    >
        <Text style={{fontSize: 20, ...{color: textColor}}}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingTop: 10,
        borderColor: Colors.primary,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    }
})