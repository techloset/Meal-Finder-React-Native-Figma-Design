import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { fontPixel, pixelSizeHorizontal, pixelSizeVertical } from '../../utils/ResponsiveDesign'
import Plan from '../../components/plan/Plan'
import CustomButton from '../../components/button/CustomButton'
import FooterLine from '../../components/footerLine/FooterLine'
import { useState } from 'react'

const HomeScreen = () => {
    const [radio,setRadio]=useState(null)
    const data = [
        {
            plan: '1 Month Plan',
            price: 12,
        },
        {
            plan: '1 Year Plan',
            price: "    8",
        },
    ]
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>

                <Image source={require('../../assets/images/upgrade.png')} style={styles.img}></Image>

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
                <View style={{ gap: pixelSizeVertical(14.5) }}>

                    {
                        data.map((item,index) => <Plan key={index} num={index} radio={radio} setRadio={setRadio} {...item} />)
                    }
                </View>
            
            </View>
            <View style={styles.footerContainer}>
            <CustomButton text={'Upgrade'} btnContainer={styles.btnContainer} btnText={styles.btnText} />
            <Text style={[styles.color,styles.termsText]}>{`By continuing you agree to the`}</Text>
            <Text style={[styles.color,styles.CondiText]}>Terms & Conditions</Text>
            <FooterLine styles={styles.footer} />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imgContainer: {
        width: '100%',
        height: pixelSizeVertical(186),
        position: 'relative',
        zIndex: -10
    },
    img: { height: '100%', resizeMode: 'cover', width: '100%' },
    plansContainer: {
        flex: 1, 
        backgroundColor: "rgba(255, 255, 255, 1)",
      

        marginTop: -pixelSizeVertical(60),
        zIndex: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        justifyContent:'space-between'

    },
    color: {
        color: 'black',
        textAlign: 'center'
    },
    txt1: {

        fontSize: fontPixel(14),
  
    },
    txt2: {

        fontSize: fontPixel(9.5),
   
    },
    textContainer: { alignItems: "center", marginTop:pixelSizeVertical(8),gap:pixelSizeVertical(6)  }
    ,btnText:{
        color:'white'
    },
    btnContainer:{
        backgroundColor:'rgba(138, 71, 235, 1)',
       
        paddingVertical:pixelSizeVertical(10),
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:pixelSizeHorizontal(12),
        borderRadius:6
    }
    ,footerContainer:{
        flex:0.43,
        justifyContent:"flex-end",
        backgroundColor: "rgba(255, 255, 255, 1)",
        paddingTop:pixelSizeVertical(34)
    },
    footer:{
        marginBottom:pixelSizeVertical(10),
        marginTop:pixelSizeHorizontal(17),
    },termsText:{
        marginTop:pixelSizeVertical(8.5)
    },
    CondiText:{
       
    }
})