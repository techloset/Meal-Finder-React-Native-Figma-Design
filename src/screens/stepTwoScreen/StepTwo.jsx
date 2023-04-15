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
const {width,height}=Dimensions.get('window')
const StepOne = () => {
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
            <View style={styles.contentContainer}>

            <StepsHeader ></StepsHeader>
            <StepOneContent {...data} btnData={btnData}></StepOneContent>
            </View>
            <View style={styles.btnContainer}>
                {
                    [
                        'Previous',
                        'Next'
                    ].map(item => <CustomButtom text={item} key={item} btnContainer={[styles[`${item}`], styles.btnText]} btnText={[styles[`text${item}`], styles.btnText]} />)
                }
            </View>
            <FooterLine styles={styles.footer}></FooterLine>
        </View>
    )
}

export default StepOne
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentContainer: { flex: 4 },
    btnContainer: { paddingBottom: pixelSizeVertical(30), paddingHorizontal: pixelSizeHorizontal(15), flex: 1, justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row' },
    Previous: { alignItems: "center", justifyContent: "center", width: pixelSizeHorizontal(75), backgroundColor: '#F2F2F2', borderRadius: 5 },
    Next: { alignItems: "center", justifyContent: "center", backgroundColor: '#8A47EB', borderRadius: 5, width: pixelSizeHorizontal(75) },
    textPrevious: { color: 'black' },
    btnText: { fontSize: fontPixel(10), paddingVertical: pixelSizeVertical(4) },
    textNext: { color: "white" },
    footer:{marginBottom:height*0.03},

})