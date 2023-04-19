import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal
} from '../../utils/ResponsiveDesign.jsx'
const StepsHeader = () => {
  return (
    <View style={styles.Container}>

    <View style={styles.btns}>
                {
                    [
                        1, 2, 3, 4
                    ].map((item, index) => <Pressable
                        key={index}
                        style={[styles.slideBtn,
                        styles[`btn${item}`]]}>
                        <Text style={[styles.slideBtnText, { color:index == 1?'#FFFFFF' :'black', }]} >{item}</Text>
                        </Pressable>)
                }
            </View>
            <Text style={styles.skipText}>Skip</Text>
    </View>

      
  )
}

export default StepsHeader

const styles = StyleSheet.create({
    Container: {

        flexDirection: "row",
        justifyContent: 'space-between',
        paddingLeft: pixelSizeHorizontal(18),
        paddingRight: pixelSizeHorizontal(10),
        paddingTop: pixelSizeVertical(21)

    },
    btn1: {
        borderColor: 'black',
        borderWidth: 1,


    },
    btn2: {
        backgroundColor: '#8A47EB',
        color: '#FFFFFF'
    },
    btn3: {
        // borderColor: 'black',
        // borderWidth: 1,
        backgroundColor:'#EAEAEA'
    },
    btn4: {
        backgroundColor:'#EAEAEA'

        // borderColor: 'black',
        // borderWidth: 1,
    },
    slideBtn: {
        // padding: pixelSizeHorizontal(4),

        height: heightPixel(13),
        width: widthPixel(13),
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: pixelSizeHorizontal(5)
    },
    1: {},
    slideBtnText: {
        fontSize: fontPixel(7),
    },
    skipText: {
        color: '#1F73F1',
        fontSize: fontPixel(10),
        lineHeight: fontPixel(10),
        fontFamily:'SF-Pro-Display-Bold'
    },
    btns: {
        flexDirection: 'row'

    }
},
)
