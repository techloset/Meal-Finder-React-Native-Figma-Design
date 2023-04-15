import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const Button = (props) => {
  return (
    <Pressable style={props.btnContainer}>
    <Text style={props.btnText}>
{props.text}
    </Text>
 </Pressable>
  )
}

export default Button

