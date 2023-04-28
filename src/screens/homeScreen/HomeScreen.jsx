import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Dimensions
} from 'react-native';
import React from 'react';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../utils/ResponsiveDesign';
import {heightPixel} from '../../utils/ResponsiveDesign';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
const windowHeight = Dimensions.get('window').height;
import Chart from '../../components/chart/Chart';
const HomeScreen = () => {
  const navigation = useNavigation();
  const [showProgress, setShowProgress] = useState(true);
  const data = [
    {
      path: require('../../assets/images/c1.png'),
    },
    {
      path: require('../../assets/images/c3.png'),
    },
    {
      path: require('../../assets/images/c2.png'),
    },
  ];
  const imgsData = [
    {
      path: require('../../assets/images/d2.png'),
    },
    {
      path: require('../../assets/images/d1.png'),
    },
    {
      path: require('../../assets/images/d2.png'),
    },
  ];
  return (
    <ScrollView style={styles.container}>
       
      <View style={styles.imgContainer}>
        <Image
          source={require('../../assets/images/top.png')}
          style={styles.img1}></Image>
        <Pressable onPress={()=>navigation.navigate('SettingScreen')}>
        <Image
          source={require('../../assets/images/burger.png')}
          style={styles.img2}></Image>
        </Pressable>
      </View>
      {showProgress ? (
        <View
          style={{
            backgroundColor: 'rgba(109, 20, 255, 1)',
            flexDirection: 'row',
            gap: pixelSizeHorizontal(7),
            alignItems: 'center',
            borderRadius: 8,
            marginTop: pixelSizeVertical(13),
            paddingLeft: pixelSizeHorizontal(8),
            paddingBottom: pixelSizeVertical(18),
            paddingTop: pixelSizeVertical(12),
          }}>
          <Image
            source={require('../../assets/images/cup.png')}
            style={{width: widthPixel(33), height: heightPixel(33)}}></Image>
          <View style={{gap: pixelSizeVertical(5)}}>
            <Text style={styles.congratsText}>Wow! You made it</Text>
            <Text style={styles.planText}>
              You have won{' '}
              <Text style={styles.trialTxt}>5 days free trial</Text>
              {`\nof the daily diet plan. Enjoy!`}{' '}
            </Text>
          </View>

          <Image
            source={require('../../assets/images/cel.png')}
            style={{position: 'absolute', bottom: 0, right: 10}}></Image>
          <TouchableOpacity
            onPress={() => setShowProgress(false)}
            style={{position: 'absolute', top: 8, right: 10}}>
            <Image source={require('../../assets/images/cross.png')}></Image>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.progressContainer}>
          <View style={styles.txtContainer}>
            <Text style={[styles.color, styles.txt1]}>Today’s Progress</Text>
            <Text style={[styles.txt2]}>View more</Text>
          </View>
         

          <Chart  />
       
       
            <View
              style={[
                styles.direction,
                {
                  marginTop: pixelSizeVertical(11),
                  position: 'relative',
                  zIndex: 10,
                  gap: 5,
                  paddingTop:pixelSizeVertical(13),
                },
              ]}>
              <Image
                source={require('../../assets/images/img.png')}
                style={styles.img}></Image>
                <View style={{position:'relative'}} >

              <Image
                source={require('../../assets/images/Tail.png')}
                style={styles.tailImg}></Image>
              <Text style={[styles.color, styles.picComment]}>
                🎉 Keep the pace! You’re doing great.
              </Text>
                </View>
            </View>
         
        </View>
      )}

      <View
        style={{ marginTop: pixelSizeVertical(13),gap:pixelSizeVertical(11),}}>
        {imgsData.map(({path}, index) => (
          <Pressable
            key={index}
            style={{height: heightPixel(103),shadowColor: "#000000",elevation:4,shadowOpacity:  0.5,shadowRadius: pixelSizeHorizontal(5),borderRadius:pixelSizeHorizontal(5)}}
            onPress={() =>
              navigation.navigate('RecipeScreen', {
                path,
              })
            }>
            <Image
              source={path}
              style={{width: '100%',height:'100%' ,borderRadius:pixelSizeHorizontal(5)}}
            />
          </Pressable>
        ))}
      </View>
     
     
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  shadow: {
   
  },
  trialTxt: {fontFamily: 'SF-Pro-Display-Bold', color: '#FFFFFF'},
  congratsText: {
    fontSize: fontPixel(10),
    color: '#FFFDFB',
    fontFamily: 'SF-Pro-Display-Bold',
    lineHeight: fontPixel(10),
  },
  planText: {fontSize: fontPixel(8), color: '#D8C0FF'},
  container: {
    flex: 1,
    paddingHorizontal: pixelSizeHorizontal(8),
    backgroundColor: '#FFFFFF',
  },
  imgContainer: {
    marginTop: pixelSizeHorizontal(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  img1: {
    width: pixelSizeHorizontal(21),
    height: pixelSizeVertical(21),
    resizeMode: 'contain',
  },
  img2: {
    width: pixelSizeHorizontal(14),
    height: pixelSizeVertical(14),
    resizeMode: 'contain',
  },
  progressContainer: {
    borderWidth: 1,
    padding: pixelSizeHorizontal(10.4),
    marginTop: pixelSizeVertical(11),
    borderRadius: 11,
  },
  color: {
    color: 'black',
  },
  txtContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  txt1: {fontSize: fontPixel(10),   fontFamily:'SF-Pro-Display-Bold'},
  txt2: {fontSize: fontPixel(8), color: 'rgba(31, 115, 241, 1)',  fontFamily:'SF-Pro-Display-Semibold'},
  fireImg: {
    width: pixelSizeHorizontal(9),
    height: pixelSizeVertical(9),
    resizeMode: 'contain',
  },
  caloriesAmountText: {fontSize: fontPixel(10)},
  caloriesText: {color: 'rgba(109, 109, 109, 1)', fontSize: fontPixel(8)},

  direction: {flexDirection: 'row', alignItems: 'center'},
  picComment: {
    backgroundColor: 'rgba(243, 243, 243, 1)',
    position:"relative",
    paddingVertical: pixelSizeVertical(4),
    paddingHorizontal: pixelSizeHorizontal(8),
    borderRadius: pixelSizeHorizontal(11),
    marginTop: -15,
    fontSize: fontPixel(9),
  },
  img: {
    width: widthPixel(18),
    height: widthPixel(18),
    borderRadius:100,
    marginTop:-pixelSizeHorizontal(4),
    
  },
  tailImg: {
    width: widthPixel(12),
    height: heightPixel(8),

    bottom:-5,
    left:0,
    position: 'absolute',
    zIndex: 10,
  },
});
