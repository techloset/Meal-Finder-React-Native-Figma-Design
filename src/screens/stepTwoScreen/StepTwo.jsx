import { Pressable, StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal
} from '../../utils/ResponsiveDesign.jsx'
import StepOneContent from '../../components/stepOneContent/StepOneContent.jsx'
import StepsHeader from '../../components/stepsHeader/StepsHeader.jsx'
import CustomButtom from '../../components/button/CustomButton'
import FooterLine from '../../components/footerLine/FooterLine.jsx'
import { useNavigation } from '@react-navigation/native'
const {width,height}=Dimensions.get('window')
const StepOne = () => {
    const navigation=useNavigation()
    const data={
        heading:`Do you follow any of\nthese diets?`,
        content: `To offer you the best tailored diet\nexperience we need to know more\ninformation about you.`
    }
    const btnData=[
        'None',
        'Vegan',
        'Paleo',
        'Dukan',
        'Vegetarian',
        'Atkins',
        'Intermittent Fasting',
    
    ]
    return (
        <View style={styles.Container}>
           <View style={styles.btnsContainer}>

<View style={styles.btns}>
            {
                [
                    1, 2, 3, 4
                ].map((item, index) => <Pressable
                    key={index}
                    style={[styles.slideBtn,
                    styles[`btn${item}`]]}>
                    <Text style={[styles.slideBtnText, { color:index == 3?'#FFFFFF' :'black', }]} >{item}</Text>
                    </Pressable>)
            }
        </View> 
        <Text style={styles.skipText} >Skip</Text>
</View>
            <View style={styles.contentContainer}>
            <StepOneContent data={data} btnData={btnData}></StepOneContent>

            </View>
            <View style={styles.btnContainer}>
                {
                    [
                        'Previous',
                        'Next'
                    ].map(item => <Pressable style={styles[item]} onPress={()=>navigation.navigate(item=="Previous"?'StepOne':'Notification')} >
    <Text style={[styles[`text${item}`],styles.btnText]}>
{item}
    </Text>
 </Pressable>)
                }
            </View>
            <FooterLine styles={styles.footer}></FooterLine>
        </View>
    )
}

export default StepOne
const styles = StyleSheet.create({
    btnsContainer: {
          
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
        color: '#FFFFFF',
        borderColor: 'black',
        borderWidth: 1,
    },
    btn3: {
        borderColor: 'black',
        borderWidth: 1,
    },
    btn4: {
        backgroundColor: '#8A47EB',

    },
    slideBtn: {

        height: heightPixel(13),
        width: widthPixel(13),
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: pixelSizeHorizontal(5)
    },
    
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

    },
    Container: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentContainer: { flex: 4 },
    btnContainer: { paddingBottom: pixelSizeVertical(30), paddingHorizontal: pixelSizeHorizontal(15), flex: 1, justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row' },
    Previous: { alignItems: "center", justifyContent: "center", width: pixelSizeHorizontal(75), backgroundColor: '#F2F2F2', borderRadius: 5 },
    Next: { alignItems: "center", justifyContent: "center", backgroundColor: '#8A47EB', borderRadius: 5, width: pixelSizeHorizontal(75) },
    textPrevious: { color: 'black' },
    btnText: { fontSize: fontPixel(10), paddingVertical: pixelSizeVertical(4),fontFamily:'SF-Pro-Display-Bold' },
    textNext: { color: "white" },
    footer:{marginBottom:height*0.03},

})