import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButtom from '../../components/button/CustomButton'
import {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal
} from '../../utils/ResponsiveDesign.jsx'
const StepOneBtns = ({ data }) => {
    return (
        <View style={styles.container}>
            {
                data.map(item => <CustomButtom text={item} key={item} btnText={styles.text} btnContainer={styles.btnContainer} />)
            }
        </View>
    )
}

export default StepOneBtns

const styles = StyleSheet.create({
    container: { marginRight: pixelSizeHorizontal(30), marginTop: pixelSizeVertical(25), flexDirection: 'row', flexWrap: 'wrap', columnGap: pixelSizeHorizontal(5), rowGap: pixelSizeVertical(10) },
    btnContainer: {
        flexWrap: 'wrap',
        borderColor: 'black',
        borderWidth: 1,
        width: 'auto',
        height: pixelSizeVertical(18), alignItems: 'center', justifyContent: 'center',
        paddingHorizontal: pixelSizeHorizontal(10),
        borderRadius: 100,
    },
    text: {
        fontSize: fontPixel(9),
        color: 'black'
    }
})