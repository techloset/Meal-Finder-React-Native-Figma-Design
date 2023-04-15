import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal
} from '../../utils/ResponsiveDesign.jsx'
const FooterLine = ({styles}) => {
  return (
    <View style={[styles,{backgroundColor:'black',width:widthPixel(68),height:heightPixel(3),alignSelf:"center",borderRadius:5}]}>
        
    </View>
  )
}

export default FooterLine

