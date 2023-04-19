import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RadioBtn from '../radioBtn/RadioBtn'
import { fontPixel, pixelSizeHorizontal, pixelSizeVertical } from '../../utils/ResponsiveDesign'
const Plan = ({ num, plan, price, radio, setRadio }) => {
    return (
        <View style={[styles.container, styles.direction, {
            borderColor: radio == num ? 'rgba(138, 71, 235, 1)' : '',
            borderWidth: radio == num ? 1 : 0,
            backgroundColor: radio == num ? 'white' : 'rgba(245, 245, 245, 1)',
        }]}>
            <View style={[styles.radioContainer, styles.direction]}>
                <RadioBtn num={num} setRadio={setRadio} radio={radio} />
                <View style={{ gap: pixelSizeVertical(1.5) }}>
                    <Text style={[styles.color, styles.plan]}>{plan}</Text>

                    <Text style={[styles.cancelText]}>Billed monthly. Cancel anytime.</Text>


                </View>
            </View>
            <Text style={[styles.color, styles.txtContainer]}><Text style={styles.txt}>for only </Text><Text style={{ fontSize: fontPixel(8) }}>$</Text><Text style={styles.priceTxt}>{price}</Text><Text style={styles.txt}>/ month</Text></Text>
        </View>
    )
}

export default Plan

const styles = StyleSheet.create({
    container: {

        marginHorizontal: pixelSizeHorizontal(8),
        borderRadius: pixelSizeHorizontal(30),
        paddingHorizontal: pixelSizeHorizontal(8),
        paddingVertical: pixelSizeVertical(8),
        justifyContent: 'space-between'
    },
    direction: { flexDirection: 'row', alignItems: 'center', },
    color: {
        color: 'black'
    },
    plan: {
        fontSize: fontPixel(12),
        lineHeight: fontPixel(16),
        fontFamily:'SF-Pro-Display-Semibold'
    },
    cancelText: {
        fontSize: fontPixel(6),
        color: 'rgba(63, 59, 59, 1)'
    },
    txt: {
        fontSize: fontPixel(6),
    },
    priceTxt: {
        fontSize: fontPixel(16),
        lineHeight: fontPixel(16),
        fontFamily:'SF-Pro-Display-Semibold'
    },
    radioContainer: {

        gap: pixelSizeHorizontal(8),


    },
    txtContainer: { alignSelf: 'flex-end', marginBottom: -pixelSizeVertical(2), marginRight: pixelSizeHorizontal(3) }

})