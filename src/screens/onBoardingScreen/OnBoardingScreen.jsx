import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import LunchCrousel from '../../components/lunchCrousel/LunchCrousel'
import LunchContent from '../../components/lunchContent/LunchContent'
import Carousel, {Pagination} from 'react-native-snap-carousel';
import FooterLine from '../../components/footerLine/FooterLine';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal
} from '../../utils/ResponsiveDesign.jsx'

const {width,height}=Dimensions.get('window')
const OnBoardingScreen = () => {
  return (
  <View style={styles.itemContainer}>
  <LunchCrousel></LunchCrousel>


  <LunchContent></LunchContent>
   
  <FooterLine styles={styles.footer}></FooterLine>
  
  </View>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
        backgroundColor:'#FFFFFF',

        paddingTop:50
   
  },
  footer:{marginTop:height*0.05,marginBottom:height*0.03},

});
// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: pixelSizeHorizontal(15),
//     paddingVerticle: pixelSizeVertical(20),
//     marginBottom: pixelSizeVertical(10),
//     height: heightPixel(200),
//     width: widthPixel(200),
//   },
  
//   title: {
//     fontSize: fontPixel(18),
//     paddingVerticle: pixelSizeVertical(10),
//   },
//  })