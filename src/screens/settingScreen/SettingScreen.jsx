import {StyleSheet, Text, View, TouchableOpacity, Image,Dimensions} from 'react-native';
import React from 'react';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../utils/ResponsiveDesign.jsx';
import Chart from '../../components/chart/Chart.jsx';
import BarChart from '../../components/barChart/BarChart.jsx'
import LineChart from '../../components/lineChart/LineChart.jsx';
import { useNavigation } from '@react-navigation/native';
const {height}=Dimensions.get('window')
const SettingScreen = () => {
  const navigation=useNavigation()
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
          <Image
            source={require('../../assets/images/arrow.png')}
            style={styles.img}></Image>
        </TouchableOpacity>
        <Text style={styles.text}>Settings</Text>
      </View>
      <View>
        <View style={styles.greetingContainer}>
          <Image
            source={require('../../assets/images/top.png')}
            style={styles.img1}></Image>
          <Text style={styles.greeting}>Hi, Rebecca</Text>
        </View>
        <View style={styles.headerBtn}>
          <TouchableOpacity
           
            style={styles.headerBtnChild1}>
            <Text style={[ styles.txt]}>Journal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerBtnChild2}>
            <Text style={[styles.headerBtnChildTxt2, styles.txt]}>
              Favorites
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.txtContainer}>
          <Text style={[styles.color, styles.txt1]}>Weekly Progress</Text>
          <View style={[styles.direction,{alignItems:'center'}]}>
            <Text style={[styles.color, styles.txt2]}>9:38 AM</Text>
            <Image
              source={require('../../assets/images/direction.png')}
              style={styles.arrowIcon}></Image>
          </View>
        </View>
        <Chart />
      </View>
      <Text style={styles.measurementText}>Latest Measurements</Text>
      <View style={styles.measurementContainer}>
        <View style={[styles.txtContainer, styles.weightContainer]}>
          <Text style={[styles.color, styles.txt1]}>Weight</Text>
          <View style={[styles.direction,{alignItems:'center'}]}>
            <Text style={[styles.color, styles.txt2]}>9:38 AM</Text>
            <Image
              source={require('../../assets/images/direction.png')}
              style={styles.arrowIcon}></Image>
          </View>
        </View>
        <View style={[styles.direction,{justifyContent:'space-between',borderBottomColor:'rgba(235, 235, 235, 1)',borderBottomWidth:1,paddingBottom:pixelSizeVertical(8)}]}>
            <View style={{marginTop:pixelSizeVertical(7),gap:pixelSizeVertical(3)}}>
                <Text style={[styles.color,{fontSize:fontPixel(7.7)}]}>
                    <Text style={{fontSize:fontPixel(15),lineHeight:fontPixel(15), fontFamily: 'SF-Pro-Display-Bold'}}>72.4 </Text> <Text style={{fontSize:fontPixel(7.7),paddingLeft:pixelSizeHorizontal(3.8)}}>Kg</Text>
                </Text>
                <Text style={{color:'#3F3B3B',fontSize:fontPixel(6.5)}}>
                21% Fat Mass
                </Text>
            </View>
            <View style={{width:'60%', transform: [{rotate: '20deg'},],}}>
              <LineChart/>
            </View>
        </View>

        <TouchableOpacity style={styles.weightBtn}>
          <Text style={styles.weightText}>Track new weight</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.measurementContainer,styles.caloryContainer]}>
        <View style={[styles.txtContainer, styles.weightContainer]}>
          <Text style={[styles.color, styles.txt1]}>Calories</Text>
          <View style={[styles.direction,{alignItems:'center'}]}>
            <Text style={[styles.color, styles.txt2]}>9:38 AM</Text>
            <Image
              source={require('../../assets/images/direction.png')}
              style={styles.arrowIcon}></Image>
          </View>
        </View>
        <View style={styles.direction}>
            <View style={{marginTop:pixelSizeVertical(7),gap:pixelSizeVertical(3)}}>
                <Text style={[styles.color,{fontSize:fontPixel(7.7)}]}>
                    <Text style={{fontSize:fontPixel(15),lineHeight:fontPixel(15), fontFamily: 'SF-Pro-Display-Bold',}}>1,548</Text> Cal
                </Text>
                <View style={[styles.direction,styles.goalContainer]}>
<View style={styles.greenDot}>

</View>
                <Text style={styles.percentageMass}>
                89% Goal
                </Text>
                </View>
            </View>
    
         
           
        <View style={{flex:1,height:heightPixel(50),marginTop:-pixelSizeVertical(5),marginBottom: height>=550?pixelSizeVertical(20):pixelSizeVertical(10)}}>

            <BarChart></BarChart>

           <View style={{borderBottomWidth:1,borderBottomColor:'#E9E9E9',width:'100%',height:1,marginTop:-pixelSizeVertical(9.5),marginHorizontal:5}}>
            
           </View>
           </View>

        </View>
      </View>   
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  img1:{width:widthPixel(21),height:widthPixel(21)},
    percentageMass:{color:'#3F3B3B',fontSize:fontPixel(6.5)},
  weightText: {
    fontSize: fontPixel(10),
    lineHeight: fontPixel(10),
    color: 'white',
    fontFamily: 'SF-Pro-Display-Bold',
  },
  weightBtn: {
    backgroundColor: 'rgba(138, 71, 235, 1)',
    paddingVertical: pixelSizeVertical(10),
    marginBottom: pixelSizeVertical(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: pixelSizeVertical(4),
  },
  arrowIcon: {width: widthPixel(6.7), height: widthPixel(6.7),marginTop:-1.5,resizeMode:'center'},
  direction: {flexDirection: 'row'},
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: pixelSizeHorizontal(10),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingTop: pixelSizeHorizontal(10),
    paddingLeft: pixelSizeHorizontal(6),
  },
  img: {
    width: widthPixel(19),
    height: heightPixel(19),
  },

  text: {
    color: 'rgba(31, 115, 241, 1)',
    fontSize: fontPixel(10),
    fontFamily: 'SF-Pro-Display-Bold',
  },
  greeting: {
    fontSize: fontPixel(10),
    fontFamily: 'SF-Pro-Display-Medium',
    color: 'black',
  },
  color: {
    color: 'black',
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeHorizontal(9),
    marginTop: pixelSizeVertical(10),
    paddingLeft: pixelSizeHorizontal(6),
  },
  headerBtn: {
    backgroundColor: '#EEEEEF',
    flexDirection: 'row',
    marginTop:  height>=550?pixelSizeVertical(14):pixelSizeVertical(8),
    padding: 1,
    borderRadius: 8,
  },
  headerBtnChild1: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    margin: 1,
    borderRadius: 8,
    paddingVertical: pixelSizeVertical(4),
  },
  weightContainer: {
    paddingTop: pixelSizeVertical(8),

  },
  headerBtnChild2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: 'black',
    fontSize: fontPixel(9),
    lineHeight: fontPixel(9),
    fontFamily: 'SF-Pro-Display-Semibold',
  },
  measurementText: {
    color: 'black',
    fontSize: fontPixel(10),
    lineHeight: fontPixel(10),
    fontFamily: 'SF-Pro-Display-Semibold',
    marginVertical: pixelSizeVertical(9),
  },
  progressContainer: {
    borderWidth: 1,
    paddingHorizontal: pixelSizeHorizontal(10),
    paddingTop:  height>=550?pixelSizeVertical(10):pixelSizeVertical(7),
    paddingBottom: height>=550?pixelSizeVertical(20):pixelSizeVertical(10),
    marginTop: pixelSizeVertical(12),
    borderRadius: 11,
  },
  txt1: {
    fontSize: fontPixel(10),
    lineHeight: fontPixel(10),
    fontFamily: 'SF-Pro-Display-Bold',
  },
  txt2: {fontSize: fontPixel(7)},
  txtContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  measurementContainer: {
    borderWidth: 1,
    paddingHorizontal:pixelSizeHorizontal(9)
  },
  greenDot:{
    backgroundColor:'#71DC3F',
    width:widthPixel(5.7),
    height:heightPixel(5.7),
    borderRadius:1000
  },
  goalContainer:{
    alignItems:'center',
    gap:pixelSizeHorizontal(6.7)
  },
  caloryContainer:{
    marginTop:pixelSizeVertical(9.5),
    borderRadius:5,
    flex:1,
    marginBottom:pixelSizeVertical(10)
    // paddingBottom:pixelSizeVertical(31)
  }
});
