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
import { heightPixel, pixelSizeVertical, widthPixel } from '../../utils/ResponsiveDesign';
import { useNavigation } from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const Buttons = ({style, path, children, textStyle}) => {
    const navigation =useNavigation()
  return (
    <>
      <Pressable style={[style, styles.dBtn]} onPress={()=>navigation.navigate('OnBoardingScreen')}>
        {path && <Image source={path} style={{width: 13, height: 13}}></Image>}
        <Text style={textStyle}>{children}</Text>
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
          style={[styles.btn1, styles.width]}
          textStyle={[styles.email, styles.font]}>
          Sign up with email
        </Buttons>
        <View  style={styles.socialSignUp}>
<View style={styles.line}></View>
        <Text style={[styles.or, ]}>or use social sign up</Text>
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
            style={[styles.mp, , styles.width]}
            textStyle={[styles.color, styles.font]}>
            Continue with {item.name}
          </Buttons>
        ))}
<View style={[styles.direction,styles.login]}>

        <Text style={styles.acc}>Already have account? </Text>
        <Text style={styles.logIn}>Log In</Text>
</View>
      </View>
    
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    direction:{flexDirection:'row',alignItems:'flex-end'},
    logIn:{fontSize: width > 320 ? 16 : 10,borderBottomColor:'white',borderBottomWidth:1,color:'white',fontFamily:'SF-Pro-Display-Semibold',lineHeight:width > 320 ? 16 : 10,marginBottom:4},
    line:{backgroundColor:'#E2E2E2',height:0.8,flex:1,marginBottom:-3},
    socialSignUp:{flexDirection:'row',alignItems:'center',gap:5, width: width > 320 ? 230 : 180,},
  acc: {fontSize: width > 320 ? 16 : 10,marginTop: height * 0.035, color: '#FFFFFF',fontFamily:'SF-Pro-Display-Semibold'},
  footer: {marginTop: height * 0.05, marginBottom: height * 0.03},
  font: {
    fontSize: width > 320 ? 16 : 10,
    fontFamily:'SF-Pro-Display-Bold'
  },
  width: {
    width: width > 320 ? 230 : 180,
  },
  mp: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingLeft: 21,
    alignItems: 'center',
    gap: 8,
    marginBottom: height * 0.017,
  },
  color: {color: '#000000'},
  dBtn: {
    paddingVertical: 11,
    borderRadius: 2,
  },
  or: {color: '#E2E2E2', marginVertical: height * 0.017,fontSize: width > 320 ? 16 : 10,fontFamily:'SF-Pro-Display-Medium'},
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
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  btn1: {
    backgroundColor: '#060606',
    paddingHorizontal: 44,
  },
  email: {
    color: '#FFFFFF',
  },
  login: {
    marginBottom:pixelSizeVertical(28)
  },
});
