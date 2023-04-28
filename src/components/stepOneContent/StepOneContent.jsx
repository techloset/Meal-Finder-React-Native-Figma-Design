import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal
} from '../../utils/ResponsiveDesign.jsx'
import StepOneBtns from '../stepOneBtns/StepOneBtns.jsx'
const StepOneContent = ({data,btnData,activeOne}) => {
    const [state,setState]=useState(activeOne)
    return (
        <View style={styles.container}>
     
      <Text style={[styles.heading, styles.color]}>
                {data.heading}
            </Text>
            <Text style={[styles.subSection, styles.color]}>
               {data.content}
            </Text>
         <StepOneBtns data={btnData} state={state} setState={setState}/>
 
      
        </View>
    )
}

export default StepOneContent

const styles = StyleSheet.create({
    container:{paddingLeft:pixelSizeHorizontal(17)},
    heading: {
        fontSize: fontPixel(16),
marginTop:pixelSizeVertical(19),
lineHeight:fontPixel(19.36),
marginBottom:pixelSizeVertical(12),
color:'black',
fontFamily:'SF-Pro-Display-Semibold'
    },
    subSection: {
        fontSize: fontPixel(9),
        lineHeight:fontPixel(11.3)

    },
    color: {
        color: 'black'
    }
})