import { StyleSheet, Text, Touchable, TouchableOpacity, View ,Dimensions} from 'react-native'
import { pixelSizeHorizontal } from '../../utils/ResponsiveDesign'
const {width}=Dimensions.get('window')
const RadioBtn = ({num,setRadio,radio}) => {
 
  return (
   <TouchableOpacity onPress={()=>setRadio(num)} style={styles.container}>
{
    radio==num&&<View style={styles.btn}></View>
}

   </TouchableOpacity>
  )
}

export default RadioBtn

const styles = StyleSheet.create({
    container:{
        borderColor:'black',
        borderWidth:1,
   
        width:width>320?16:10,
        height:width>320?16:10,

        justifyContent:'center',
        alignItems:'center',
        borderRadius:1000,
        


    },
    btn:{
        backgroundColor:"rgba(138, 71, 235, 1)",
      

        borderRadius:1000,
        width:"70%",
        height:'70%',
    }
})