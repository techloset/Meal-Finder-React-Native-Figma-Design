import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../utils/ResponsiveDesign.jsx';
import {useNavigation} from '@react-navigation/native';

const FeedbackHeader = ({navigate,navigateThroughSkip}) => {
  console.log(navigateThroughSkip)
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate(navigate)}
      >
       
        <Image
          source={require('../../assets/images/arrow.png')}
          style={styles.img}></Image>
      </TouchableOpacity>
      <Text  style={styles.text}>Skip</Text>
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
