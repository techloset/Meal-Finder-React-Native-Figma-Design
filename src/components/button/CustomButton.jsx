import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { heightPixel, widthPixel } from '../../utils/ResponsiveDesign'

const Button = (props) => {

  const navigation=useNavigation()
  
  return (
    <Pressable style={props.btnContainer} onPress={()=>navigation.navigate(props.navigate)}>
    <Text style={props.btnText}>
{props.text}
    </Text>
    {
      props.path&&<Image source={props.path} style={{width:widthPixel(11.5),height:heightPixel(8),resizeMode:'contain'}}/>
    }
 </Pressable>
  )
}

export default Button

