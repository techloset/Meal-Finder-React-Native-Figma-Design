import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomButtom from '../../components/button/CustomButton';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../utils/ResponsiveDesign.jsx';
import {useNavigation} from '@react-navigation/native';

const FeedbackHeader = ({navigate}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate(navigate)}
      >
       
        <Image
          source={require('../../assets/images/arrow.png')}
          style={styles.img}></Image>
      </TouchableOpacity>
      <CustomButtom text='Skip' btnText={styles.text}></CustomButtom>
    </View>
  );
};

export default FeedbackHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingTop: pixelSizeHorizontal(10),
  },
  img: {
    width: widthPixel(19),
    height: heightPixel(19),
  },

  text: {
    color: '#600FD4',
    fontSize: fontPixel(10),
    fontFamily:'SF-Pro-Display-Bold'
  },
});
