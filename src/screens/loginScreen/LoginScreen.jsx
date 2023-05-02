import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
  Dimensions,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../utils/ResponsiveDesign';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const Buttons = ({style, path, children, textStyle}) => {
  const navigation = useNavigation();
 
  return (
    <>
      <Pressable
        style={[style, styles.dBtn,]}
        onPress={() => navigation.navigate('OnBoardingScreen')}>
        <View style={styles.continueContainer}>

        {path && <Image source={path} style={{width: widthPixel(13), height: widthPixel(13),}}></Image>}
        <Text style={[textStyle,{marginRight:children.at(-1)=='Google'?pixelSizeHorizontal(11): children.at(-1)=='Apple'?pixelSizeHorizontal(13.4):0}]}>{children}</Text>
        </View>
      </Pressable>
    </>
  );
};
const LoginScreen = () => {
  return (
    <View style={styles.parent}>
      <ImageBackground source={require('../../assets/images/bg.png')}>
        <LinearGradient
          colors={['#8A47EB', 'rgba(255, 255, 255, 0)']}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0.1}}
          style={{zIndex: 1}}>
          <View style={{aspectRatio: 230 / 220}}></View>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.btns}>
        <Buttons
          style={[styles.btn1, styles.width,styles.center]}
          textStyle={[styles.email, styles.font]}>
          Sign up with email
        </Buttons>
        <View style={styles.socialSignUp}>
          <View style={styles.line}></View>
          <Text style={[styles.or,styles.signUpText]}>or use social sign up</Text>
          <View style={styles.line}></View>
        </View>

        {[
          {path: require('../../assets/images/g.png'), name: 'Google'},
          {path: require('../../assets/images/f.png'), name: 'Facebook'},
          {path: require('../../assets/images/a.png'), name: 'Apple'},
        ].map(item => (
          <Buttons
            path={item.path}
            key={item.name}
            style={[styles.mp ]}
            textStyle={[styles.color, styles.font]}>
             Continue with {item.name}
          </Buttons>
        ))}
        <View style={[styles.direction, styles.login]}>
          <Text style={styles.acc}>Already have account? </Text>
          <Text style={styles.logIn}>Log In</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  continueContainer:{flexDirection:'row',gap:pixelSizeHorizontal(8.06),alignItems:'center',justifyContent:'center'},
  center:{alignItems:'center'},
  signUpText:{fontSize:fontPixel(9.21), fontFamily: 'SF-Pro-Display-Medium',},
  direction: {flexDirection: 'row', alignItems: 'flex-end'},
  logIn: {
   
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: 'white',
    fontFamily: 'SF-Pro-Display-Semibold',
    fontSize:fontPixel(10.94),
    lineHeight:fontPixel(10.94),
 
  },
  line: {backgroundColor: '#E2E2E2', height: 0.8, flex: 1},
  socialSignUp: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeVertical(4.06),
  },
  acc: {
   
    marginTop: height * 0.035,
    color: '#FFFFFF',
    fontSize:fontPixel(10),
    lineHeight:fontPixel(10),
    fontFamily: 'SF-Pro-Display-Semibold',
  },
  font: {
    // alignSelf:'center',
  fontSize:fontPixel(10.96), 
  // lineHeight:fontPixel(10.36), 
    fontFamily: 'SF-Pro-Display-Bold',
  },
  
  mp: {
    backgroundColor: '#FFFFFF',
  height:heightPixel(27.6),
    gap: 8,
    marginBottom: pixelSizeVertical(8.06),
    // paddingLeft:pixelSizeHorizontal(21)

  },
  color: {color: '#000000'},
  dBtn: {
    justifyContent:'center',
    borderRadius: pixelSizeHorizontal(3),
  },
  or: {
    color: '#E2E2E2',
    marginTop:pixelSizeVertical(7),
    marginBottom:pixelSizeVertical(9.6),
   
  },
  parent: {
    backgroundColor: '#8A47EB',
    flex: 1,
  
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: 0,
  },
  btns: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft:pixelSizeHorizontal(21),
    paddingRight:pixelSizeHorizontal(19),
  },
  btn1: {
    backgroundColor: '#060606',
    height:heightPixel(33)
  
  },
  email: {
    color: '#FFFFFF',
  },
  login: {
    marginBottom: pixelSizeVertical(28),
    justifyContent:'center',
  },
});
