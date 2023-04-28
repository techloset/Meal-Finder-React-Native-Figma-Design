import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../utils/ResponsiveDesign';
import Plan from '../../components/plan/Plan';
import CustomButton from '../../components/button/CustomButton';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [radio, setRadio] = useState(1);
  const data = [
    {
      plan: '1 Month Plan',
      price: 12,
    },
    {
      plan: '1 Year Plan',
      price: ' 8',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Pressable
          onPress={() => navigation.navigate('Feedback')}
          style={styles.imgArrowContainer}>
          <Image
            source={require('../../assets/images/arrow.png')}
            style={styles.imgArrow}></Image>
        </Pressable>
        <Image
          source={require('../../assets/images/upgrade.png')}
          style={styles.img}></Image>
      </View>

      <View style={styles.plansContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.color, styles.txt1]}>
            {`Your personal\nplan is ready`}
          </Text>
          <Text style={[styles.color, styles.txt2]}>
            {`Upgrade your account and get full\naccess to jumpstart your practice.`}
          </Text>
        </View>
        <View style={{gap: pixelSizeVertical(14.5)}}>
          {data.map((item, index) => (
            <Plan
              key={index}
              num={index}
              radio={radio}
              setRadio={setRadio}
              {...item}
            />
          ))}
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Pressable
          style={styles.btnContainer}
          onPress={() => navigation.navigate('Tabs', {screen: 'Home'})}>
          {/* 1st way is used to navigate to a HomeScreen and 
          second way to write in this way==> navigation.navigate('Tabs') and  set initail route of tab navigator ==>   
    <Tab.Navigator initialRouteName='HomeScreen'> */}
          <Text style={styles.btnText}>Upgrade</Text>
        </Pressable>
        <Text
          style={[
            styles.color,
            styles.termsText,
          ]}>{`By continuing you agree to the`}</Text>
        <Text style={[styles.color, styles.CondiText]}>Terms & Conditions</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    width: '100%',
    height: pixelSizeVertical(186),
    position: 'relative',
    zIndex: -10,
  },
  imgArrowContainer: {
    position: 'absolute',
    zIndex: 100,
    marginTop: pixelSizeVertical(13),
    marginLeft: pixelSizeHorizontal(11),
  },
  imgArrow: {
    width: widthPixel(21),
    height: widthPixel(21),
    resizeMode: 'contain',
  },
  img: {height: '100%', resizeMode: 'cover', width: '100%'},
  plansContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',

    marginTop: -pixelSizeVertical(56),
    zIndex: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'space-between',
  },
  color: {
    color: 'black',
    textAlign: 'center',
  },
  txt1: {
    fontSize: fontPixel(14),
    fontFamily: 'SF-Pro-Display-Semibold',
  },
  txt2: {
    fontSize: fontPixel(9.5),
    lineHeight: fontPixel(13.3),
    fontFamily: 'SF-Pro-Display-Medium',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: pixelSizeVertical(8),
    gap: pixelSizeVertical(6),
  },
  btnText: {
    color: 'white',
    fontSize: fontPixel(10),
    fontSize: fontPixel(10),
    fontFamily: 'SF-Pro-Display-Bold',
  },
  btnContainer: {
    backgroundColor: 'rgba(138, 71, 235, 1)',

    paddingVertical: pixelSizeVertical(9),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: pixelSizeHorizontal(12),
    borderRadius: 6,
  },
  footerContainer: {
    flex: 0.43,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: pixelSizeVertical(34),
  },
  footer: {
    marginBottom: pixelSizeVertical(10),
    marginTop: pixelSizeHorizontal(17),
  },
  termsText: {
    marginTop: pixelSizeVertical(8.5),
    fontSize: fontPixel(9),
    lineHeight: fontPixel(9),
    fontFamily: 'SF-Pro-Display-Medium',
    
  },
  CondiText: {
    fontSize: fontPixel(9),
    lineHeight: fontPixel(9),
    fontFamily: 'SF-Pro-Display-Bold',
    marginBottom: pixelSizeVertical(20),
    marginTop:2
  },
});
