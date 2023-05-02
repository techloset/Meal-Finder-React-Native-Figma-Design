import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CustomButtom from '../../components/button/CustomButton';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../utils/ResponsiveDesign.jsx';
const LunchContent = ({state, setState}) => {
  return (
    <View style={styles.parent}>
      <View style={{gap: 17}}>
        <Text style={[styles.color, styles.heading]}>
          Enjoy your lunch time
        </Text>
        <Text style={[styles.color, styles.text]}>
          {`Just relax and not overthink\nwhat to eat. This is in our side\nwith our personalized meal\nplans just prepared and adapted\nto your needs.`}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginRight: width * 0.12,
          marginLeft: width * 0.1,
          marginBottom: pixelSizeVertical(20),
        }}>
       
        <View style={{flexDirection: 'row', gap: pixelSizeHorizontal(3.35),marginLeft:pixelSizeHorizontal(5)}}>
          {
            Array(4).fill(0).map((item,index)=>{
             return <TouchableOpacity
              style={{
                width: widthPixel(state == index? 19.6 : 3.35),
                borderRadius: 5000,
                height: widthPixel(3.35),
                backgroundColor: state == index ? '#8A47EB' : 'rgba(219, 219, 219, 0.4)',
              }}
              onPress={() => setState(index)}></TouchableOpacity>
            })
          }
       
        </View>

        <CustomButtom
          btnContainer={styles.btnContainer}
          btnText={styles.btnText}
          text={'Next'}
          navigate={'StepOne'}
        />
      </View>
    </View>
  );
};

export default LunchContent;

const styles = StyleSheet.create({
  footer: {marginTop: height * 0.05, marginBottom: height * 0.03},
  btnContainer: {
    borderRadius: 5,
    backgroundColor: '#8A47EB',
    height: heightPixel(26),
    width: widthPixel(75),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    borderRadius: 2,
    fontFamily: 'SF-Pro-Display-Bold',
  },
  heading: {fontSize: fontPixel(14.8), fontFamily: 'SF-Pro-Display-Semibold'},
  text: {fontSize: fontPixel(10), lineHeight: fontPixel(14)},
  parent: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: pixelSizeVertical(30),
  },
  color: {
    color: '#000000',
    textAlign: 'center',
  },
  font: {
    lineHeight: 14,
  },
});
