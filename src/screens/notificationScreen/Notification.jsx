import { StyleSheet, Text, View,Image,FlatList, Dimensions} from 'react-native'
import React from 'react'
import {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal,

} from '../../utils/ResponsiveDesign.jsx'
import CustomButtom from '../../components/button/CustomButton'
import FooterLine from '../../components/footerLine/FooterLine.jsx'
import FeedbackHeader from '../../components/feedbackHeader/FeedbackHeader.jsx'
const {width,height}=Dimensions.get('window')
const List=({item})=>{
   console.log()
    return(
        <>
        <View style={{flexDirection:'row',gap:pixelSizeHorizontal(11),borderBottomColor:'rgba(138, 71, 235, 1)',borderBottomWidth:1}}>
            <Image source={require('../../assets/images/tick.png')} style={{width:pixelSizeHorizontal(13),marginLeft:pixelSizeHorizontal(5),resizeMode:'contain'}}></Image>
<Text style={{fontSize:fontPixel(9.5),color:'rgba(96, 15, 212, 1)',paddingBottom:pixelSizeVertical(9.5)}}>{item.title}</Text>
        </View>
 
        </>
    )
}
const Notification = () => {
    const data=[
    { id: '1', title: 'New daily meal reminders' },
    { id: '2', title: 'Motivational messages' },
    { id: '3', title: 'Personalized guideline' },
    ]
    return (
        <View style={styles.container}>
            <View style={{flex:4}}>

            <View>
            <FeedbackHeader/>

            </View>
<View>
    <Text style={styles.heading}>
        {`Do you want to turn\non notifications?`}
    </Text>
    <View style={styles.notificationContainer}>
<View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between'}}>
<View style={{backgroundColor:'black',padding:pixelSizeHorizontal(3),borderRadius:8}}>
    <View style={{backgroundColor:'#8D54E0',padding:pixelSizeHorizontal(7),borderRadius:10000,}}></View>
</View>
<Text style={{color:'rgba(63, 63, 63, 0.5)'}}>
now
</Text>
</View>
<View style={{paddingTop:pixelSizeVertical(4),fontSize:fontPixel(7.5)}}>
    <Text style={{color:'rgba(0, 0, 0, 1)'}}>Notification Title</Text>
    <Text style={{fontSize:fontPixel(7.5),color:'rgba(0, 0, 0, 1)'}}>
        {`Notification text would be placed right here.This is where notification text would be placed.`}
    </Text>
</View>
    </View>
</View>
<FlatList
    data={data}
    renderItem={List}
    keyExtractor={item => item.id}
    style={{marginTop:pixelSizeVertical(50)}}
  />
            </View>
<View style={{flex:1,justifyContent:'flex-end'}}>

  <CustomButtom text={'Enable'} btnContainer={styles.btnContainer}btnText={styles.btnText} />
  <FooterLine styles={styles.footer}></FooterLine>
</View>
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    footer:{marginBottom:height*0.03},
    container: {
        flex: 1,
       backgroundColor:"#F6F0FF",
 
        paddingHorizontal:pixelSizeHorizontal(15),
    },

    heading:{
        color:'#600FD4',
        fontSize:fontPixel(14),
        marginTop:pixelSizeVertical(10)
    },
    notificationContainer:{
borderColor:'black',
borderWidth:1,
paddingRight:pixelSizeHorizontal(8),
paddingLeft:pixelSizeHorizontal(5),
paddingTop:pixelSizeVertical(5),
paddingBottom:pixelSizeVertical(8),
borderRadius:pixelSizeHorizontal(7),
marginTop:pixelSizeVertical(28)
    },
    btnContainer:{
        backgroundColor:'rgba(138, 71, 235, 1)',
        borderRadius:2,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginBottom:pixelSizeVertical(20)
    },
    btnText:{
        fontSize:fontPixel(10),
        color:'white',
        paddingVertical:pixelSizeVertical(10)
    }
})