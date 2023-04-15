import { StyleSheet, Text, View, Image, ImageBackground, Pressable,Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import FooterLine from '../../components/footerLine/FooterLine';
const {width,height}=Dimensions.get('window')
const Buttons = ({ style, path, children, textStyle }) => {
    return (
        <>

            <Pressable style={[style,styles.dBtn]}>
                {path && <Image source={path} style={{width:13,height:13}}></Image>}
                <Text style={textStyle}>{children}</Text>
            </Pressable>
        </>
    )
}
const LoginScreen = () => {
    return (
        <View style={styles.parent}>
            <ImageBackground source={require('../../assets/images/bg.png')}>

                <LinearGradient colors={['#8A47EB', 'rgba(255, 255, 255, 0)']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0.1 }}
                    style={{ zIndex: 1, }}
                >
                    <View style={{ aspectRatio: 230 / 220 }}>
                    </View>
                </LinearGradient>
            </ImageBackground>
            <View style={styles.btns}>
                <Buttons style={[styles.btn1,styles.width]} textStyle={[styles.email,styles.font]} >Sign up with email</Buttons>
                <Text style={[styles.or,styles.font]}>
                    or use social sign up
                </Text>
          

                    {
                        [
                            { path: require('../../assets/images/g.png'), name: 'Google', },
                            {path:require('../../assets/images/f.png'),name:'Facebook',},
                            {path:require('../../assets/images/a.png'),name:'Apple',},

                        ].map(item => <Buttons path={item.path} style={[styles.mp,,styles.width]} textStyle={[styles.color,styles.font]}>Continue with {item.name}</Buttons>)
                    }
             
<Text style={styles.acc}>Already have account? Log In</Text>
            </View>
            <FooterLine styles={styles.footer}></FooterLine>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    acc:{ marginTop:height*0.035,color:'#FFFFFF'},
    footer:{marginTop:height*0.05,marginBottom:height*0.03},
   font:{
    fontSize:width>320? 16:10,
   },
   width:{
    width: width>320?230:180,
   },
    mp:{backgroundColor:"#FFFFFF",flexDirection:"row", paddingLeft:21,alignItems:'center',gap:8,marginBottom:height*0.017},
    color:{  color:'#000000'},
    dBtn:{
      
        paddingVertical: 11,
        borderRadius: 2,


    },
    or: {    color: '#E2E2E2',marginVertical:height*0.017 },
    parent: {
        backgroundColor: '#8A47EB',
        flex: 1,
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        zIndex: 0

    },
    btns: {
flex:1,
        alignItems: 'center',
        justifyContent:'flex-end'
    },
    btn1: {
       
        backgroundColor: '#060606',
        paddingHorizontal: 44,
    },
    email: {
        
        color: '#FFFFFF',
    },
    fang:{

    }
})