import { StyleSheet, Text, View,Image,TextInput, } from 'react-native'
import React, { memo } from 'react'
import FeedbackHeader from '../../components/feedbackHeader/FeedbackHeader'
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,

} from '../../utils/ResponsiveDesign.jsx'
import CustomButtom from '../../components/button/CustomButton'
import FooterLine from '../../components/footerLine/FooterLine.jsx'

const Feedback = () => {
  return (
    <View style={styles.container}>

<FeedbackHeader/>
<View style={styles.subContainer1}>

<View style={styles.textContainer}>

<Text style={[styles.txt1,styles.textColor]}>{`How was your overall\nexperience?`}</Text>
<Text  style={[styles.txt2,styles.textColor]}>It will help us to serve you better.</Text>
<Image source={require('../../assets/images/emojis.png')} style={styles.emojis} />
</View>

 
  <Text style={styles.wrong}>What is wrong?</Text>
  <View style={styles.btns}>

  {
    [
      'Application bugs',
      'Customer service',
      'Slow loading',
      'Bad navigation',
      'Weak functionality',
      'Other problems'
    ].map(item=><CustomButtom text={item}  key={item} btnContainer={styles.btnContainer} btnText={styles.btnText} />)
  }
  </View>
  </View>

 <View style={styles.subContainer2}  >
  <Text style={[styles.txt2,styles.textColor]}>Notes</Text>
  <TextInput   style={[styles.txtInput,{verticalAlign:'top'} ]} placeholderTextColor={'rgba(201, 201, 201, 1)'} placeholder='How we can do better?'  />
 <CustomButtom text={'Submit Feedback'} btnText={styles.submitText} btnContainer={styles.submitCont}></CustomButtom>
 <FooterLine styles={styles.footer} />
 </View>

    </View>
  )
}

export default Feedback

const styles = StyleSheet.create({
  subContainer1:{flex:1},
  subContainer2:{flex:1,marginTop:pixelSizeVertical(13),},
  footer:{marginTop:pixelSizeVertical(17),marginBottom:pixelSizeVertical(13)},
  container:{
    flex:1,
    backgroundColor:'rgba(255, 255, 255, 1)',
    paddingLeft:pixelSizeHorizontal(15),
    paddingRight:pixelSizeHorizontal(11)
  },
  txt1:{fontSize:fontPixel(14.5)},
  txt2:{fontSize:fontPixel(10),marginBottom:pixelSizeVertical(6)},
  textColor:{
    color:'rgba(0, 0, 0, 1)'
  },
  textContainer:{
    marginTop:pixelSizeVertical(5),
    gap:pixelSizeVertical(11)
  },
  emojis:{
width:pixelSizeHorizontal(132),
height:pixelSizeVertical(30),
resizeMode:'contain',
marginBottom:pixelSizeVertical(4)
  },
  wrong:{
    fontSize:fontPixel(10),
    color:'black',
  },
  btnContainer:{

    borderColor:'black',
    borderWidth:1,
paddingHorizontal:pixelSizeHorizontal(3),
borderRadius:10
  },
  btnText:{
    color:'black'
  },
  btns:{
    flexDirection:'row',
    flexWrap:'wrap',
    gap:pixelSizeHorizontal(7),
    marginTop:pixelSizeVertical(11)
  },
  submitCont:{backgroundColor:'rgba(138, 71, 235, 1)',paddingVertical:pixelSizeVertical(10),alignItems:'center',justifyContent:'center',marginTop:pixelSizeVertical(32)},
  submitText:{
    fontSize:fontPixel(10),
    color:'white'
  },
  txtInput:{borderColor:'black',borderWidth:1,flex:1,paddingLeft:pixelSizeHorizontal(7)},
})