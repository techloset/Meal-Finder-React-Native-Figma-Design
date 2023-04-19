import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal
} from '../../utils/ResponsiveDesign.jsx'
import StepOneBtns from '../stepOneBtns/StepOneBtns.jsx'
const StepOneContent = ({heading,content,btnData}) => {
    return (
        <View style={styles.container}>
     
      <Text style={[styles.heading, styles.color]}>
                {heading}
            </Text>
            <Text style={[styles.subSection, styles.color]}>
               {content}
            </Text>
         <StepOneBtns data={btnData}/>
 
      
        </View>
    )
}

export default StepOneContent

const styles = StyleSheet.create({
    container:{paddingLeft:pixelSizeHorizontal(17)},
    heading: {
        fontSize: fontPixel(16),
marginTop:pixelSizeVertical(19),
lineHeight:fontPixel(20),
marginBottom:pixelSizeVertical(12)
    },
    subSection: {
        fontSize: fontPixel(9)

    },
    color: {
        color: 'black'
    }
})