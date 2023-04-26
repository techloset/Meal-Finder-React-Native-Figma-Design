import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import {
    fontPixel,
    pixelSizeHorizontal,
    pixelSizeVertical,
    widthPixel,
  } from '../../utils/ResponsiveDesign';
  import {heightPixel} from '../../utils/ResponsiveDesign';
  import {AnimatedCircularProgress} from 'react-native-circular-progress';
const Chart = () => {
  return (
    <View
    style={[
      styles.direction,
      {
        justifyContent: 'space-between',
        gap:10,
        marginTop: pixelSizeVertical(11),
      },
    ]}>
    <View>
      <Text style={styles.caloriesText}>Calories</Text>

      <View style={styles.direction}>
        <Image
          source={require('../../assets/images/fire.png')}
          style={styles.fireImg}></Image>
        <Text style={[styles.caloriesAmountText, styles.color]}>
          1,284
        </Text>
      </View>
    </View>
    <View style={{flexDirection: 'row', gap: pixelSizeHorizontal(5)}}>
      <AnimatedCircularProgress
        size={widthPixel(41)}
        width={9}
        fill={35}
        tintColor="rgba(254, 198, 53, 1)"
        style={{borderRadius: 1000}}
        backgroundColor="rgba(243, 243, 243, 1)"
        childrenContainerStyle={{
          padding: 1,
        }}
        lineCap="round">
        {fill => (
          <View
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: fontPixel(8.4),
                lineHeight: fontPixel(8.4),
                color: 'black',
                fontFamily: 'SF-Pro-Display-Semibold',
              }}>
              29%
            </Text>
            <Text
              style={{
                fontSize: fontPixel(8.4),
                color: 'rgba(109, 109, 109, 1)',
              }}>
              Fat
            </Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <AnimatedCircularProgress
         size={widthPixel(41)}
        width={9}
        fill={65}
        tintColor="rgba(53, 133, 254, 1)"
        borderRadius={1000}
        backgroundColor="rgba(243, 243, 243, 1)"
        childrenContainerStyle={{
          padding: 1,
        }}
        lineCap="round">
        {fill => (
          <View
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: fontPixel(8.4),
                lineHeight: fontPixel(8.4),
                color: 'black',
                fontFamily: 'SF-Pro-Display-Semibold',
              }}>
              65%
            </Text>
            <Text
              style={{
                fontSize: fontPixel(8.4),
                color: 'rgba(109, 109, 109, 1)',
              }}>
              Pro
            </Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <AnimatedCircularProgress
        size={widthPixel(41)}
        width={9}
        fill={85}
        tintColor="rgba(120, 118, 245, 1)"
        borderRadius={1000}
        backgroundColor="rgba(243, 243, 243, 1)"
        childrenContainerStyle={{
          padding: 1,
        }}
        lineCap="round">
        {fill => (
          <View
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: fontPixel(8.4),
                lineHeight: fontPixel(8.4),
                color: 'black',
                fontFamily: 'SF-Pro-Display-Semibold',
              }}>
              85%
            </Text>
            <Text
              style={{
                fontSize: fontPixel(8.4),
                color: 'rgba(109, 109, 109, 1)',
              }}>
              Carb
            </Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  </View>
  )
}

export default Chart

const styles = StyleSheet.create({
    direction: {flexDirection: 'row', alignItems: 'center'},
    caloriesText: {color: 'rgba(109, 109, 109, 1)', fontSize: fontPixel(8)},
    fireImg: {
        width: pixelSizeHorizontal(9),
        height: pixelSizeVertical(9),
        resizeMode: 'contain',
      },  caloriesAmountText: {fontSize: fontPixel(11),  fontFamily:'SF-Pro-Display-Semibold',color:'black'},
})