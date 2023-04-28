import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../utils/ResponsiveDesign';
import {heightPixel} from '../../utils/ResponsiveDesign';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import {AnimatedCircularProgress} from 'react-native-circular-progress';
const Chart = ({height}) => {
  return (
    <View
      style={[
        styles.direction,
        {
          justifyContent: 'space-between',
          gap: 10,
          alignItems: 'center',
          marginTop: pixelSizeVertical(11),
        },
      ]}>
      <View>
        <Text style={styles.caloriesText}>Calories</Text>

        <View style={[styles.direction, {gap: pixelSizeHorizontal(1.5)}]}>
          <Image
            source={require('../../assets/images/fire.png')}
            style={styles.fireImg}></Image>
          <Text style={[styles.caloriesAmountText, styles.color]}>1,284</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: pixelSizeHorizontal(5.5)}}>
        <AnimatedCircularProgress
          size={heightPixel(41)}
          width={heightPixel(5.5)}
          fill={35}
          tintColor="rgba(254, 198, 53, 1)"
          style={{borderRadius: 1000}}
          backgroundColor="rgba(243, 243, 243, 1)"
          childrenContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          lineCap="round">
          {fill => (
            <View style={styles.innerContent}>
              <Text style={styles.percentageTxt}>29%</Text>
              <Text style={styles.categoryTxt}>Fat</Text>
            </View>
          )}
        </AnimatedCircularProgress>
        <AnimatedCircularProgress
          size={heightPixel(40)}
          width={heightPixel(5.5)}
          fill={65}
          tintColor="rgba(53, 133, 254, 1)"
          borderRadius={1000}
          backgroundColor="rgba(243, 243, 243, 1)"
          childrenContainerStyle={{
            padding: 1,
          }}
          lineCap="round">
          {fill => (
            <View style={styles.innerContent}>
              <Text style={styles.percentageTxt}>65%</Text>
              <Text style={styles.categoryTxt}>Pro</Text>
            </View>
          )}
        </AnimatedCircularProgress>
        <AnimatedCircularProgress
          size={heightPixel(40)}
          width={heightPixel(5.5)}
          fill={85}
          tintColor="rgba(120, 118, 245, 1)"
          borderRadius={1000}
          backgroundColor="rgba(243, 243, 243, 1)"
          childrenContainerStyle={{
            padding: 1,
          }}
          lineCap="round">
          {fill => (
            <View style={styles.innerContent}>
              <Text style={styles.percentageTxt}>85%</Text>
              <Text style={styles.categoryTxt}>Carb</Text>
            </View>
          )}
        </AnimatedCircularProgress>
      </View>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  innerContent: {justifyContent: 'flex-end', marginTop:pixelSizeVertical(3),alignItems: 'center', padding: 1},
  categoryTxt: {
    fontSize: fontPixel(8.4),
    color: 'rgba(109, 109, 109, 1)',
  },
  percentageTxt: {
    fontSize: fontPixel(8.4),
    marginLeft: 4,
    lineHeight: fontPixel(8.4),
    color: 'black',
    fontFamily: 'SF-Pro-Display-Semibold',
  },
  direction: {flexDirection: 'row', alignItems: 'center'},
  caloriesText: {color: 'rgba(109, 109, 109, 1)', fontSize: fontPixel(8)},
  fireImg: {
    width: pixelSizeHorizontal(9),
    height: pixelSizeVertical(9),
    resizeMode: 'contain',
  },
  caloriesAmountText: {
    fontSize: fontPixel(11),
    fontFamily: 'SF-Pro-Display-Semibold',
    color: 'black',
  },
});
