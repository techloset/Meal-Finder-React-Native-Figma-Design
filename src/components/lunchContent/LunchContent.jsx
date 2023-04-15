import { StyleSheet, Text, View ,Dimensions,Pressable} from 'react-native'
import React from 'react'
const {width,height}=Dimensions.get('window');
import FooterLine from '../footerLine/FooterLine';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CustomButtom from '../../components/button/CustomButton'
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal
} from '../../utils/ResponsiveDesign.jsx'
const LunchContent = () => {
  return (
    <View style={styles.parent}>
      <View style={{gap:17}}>

     <Text style={[styles.color,styles.heading]}>
     Enjoy your lunch time
     </Text>
     <Text style={[styles.color,styles.text]}>
        {`Just relax and not overthink\nwhat to eat. This is in our side\nwith our personalized meal\nplans just prepared and adapted\nto your needs.`
        }
     </Text>
        </View>
     <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:width*0.12,marginLeft:width*0.1}}>
     <Pagination
      dotsLength={3}
      activeDotIndex={0}
      dotStyle={{
        width: widthPixel(19),
        height: heightPixel(4),
        borderRadius: 5000,
        // gap:5,
        
        marginHorizontal: -3,
        backgroundColor: '#8A47EB',
      }}
      
      inactiveDotStyle={{backgroundColor:'#DBDBDB',
      width: widthPixel(5),
      height: heightPixel(5),
    }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={1}
      />
     <CustomButtom btnContainer={styles.btnContainer} btnText={styles.btnText} text={'Next'}/>
     </View>
    </View>
  )
}

export default LunchContent

const styles = StyleSheet.create({
  footer:{marginTop:height*0.05,marginBottom:height*0.03},
    btnContainer:{borderRadius:5,backgroundColor:'#8A47EB',height:heightPixel(30),justifyContent:"center",alignItems:"center"},
    btnText:{color:'#FFFFFF',borderRadius:2,paddingHorizontal:pixelSizeHorizontal(30)},
    heading:{fontSize:fontPixel(14)},
    text:{fontSize:fontPixel(10)},
    parent:{flex:1,justifyContent:'space-between',marginTop:pixelSizeVertical(30)},
    color:{
        color:'#000000',
        textAlign:'center'
    },
    font:{
        lineHeight:14
    }
})