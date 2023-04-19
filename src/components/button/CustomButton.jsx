import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Button = (props) => {
  const navigation=useNavigation()
  
  return (
    <Pressable style={props.btnContainer} onPress={()=>navigation.navigate(props.navigate)}>
    <Text style={props.btnText}>
{props.text}
    </Text>
 </Pressable>
  )
}

export default Button

