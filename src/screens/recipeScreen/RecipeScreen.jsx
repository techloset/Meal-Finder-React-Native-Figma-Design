import { StyleSheet, Text, View,Image, FlatList } from 'react-native'
import React from 'react'
import { heightPixel, pixelSizeHorizontal, widthPixel,pixelSizeVertical, fontPixel } from '../../utils/ResponsiveDesign';
import CustomButtom from '../../components/button/CustomButton'
import FooterLine from '../../components/footerLine/FooterLine';
const Item=({item})=>{
  console.log(item)
  const {ingredient,amount}=item
return(
  <View>
  <Text style={[styles.ingredient,styles.color]}>
    {ingredient}
  </Text>
  <Text style={styles.ingredientAmount}>
    {amount}
  </Text>
  </View>
)
}
const RecipeScreen = ({route}) => {
  const { path } = route.params;
  const data=[
    {
    amount:'100 k',
    category:'Energy'
  },
    {
    amount:'15 g',
    category:'Protein'
  },
    {
    amount:'58 g',
    category:'Carbs'
  },
    {
    amount:'20 g',
    category:'Fat'
  },
]
const Ingredients=[
  {
    ingredient:'Chicken breasts',
    amount:'250 g'
  },
  {
    ingredient:'Unsalted butter',
    amount:'1 tbsp'
  },
  {
    ingredient:'Sesame or vegetable oil',
    amount:'2 tsp'
  },
  {
    ingredient:'Fresh ginger',
    amount:'2 tsp'
  },
  {
    ingredient:'Large eggs',

    amount:'100 g'
  },
  {
    ingredient:'Large eggs',

    amount:'100 g'
  },
  {
    ingredient:'Large eggs',

    amount:'100 g'
  },
]
  return (
    <View style={styles.container}>
   
      <Image source={path} style={{width:'100%',height:heightPixel(150),resizeMode:'cover'}}></Image>
      <View style={styles.contentContainer}>
        <View style={{flexDirection:'row',paddingTop:pixelSizeVertical(11),paddingLeft:pixelSizeHorizontal(15),paddingRight:pixelSizeHorizontal(10)}}>
          <Image source={require('../../assets/images/reload.png')}></Image>
          <View style={{flexGrow:1}}>
            <Text style={[styles.txt,styles.color,styles.ramenTxt]}>Ramen</Text>
            <Text style={[styles.txt,styles.timeTxt]}>Lunch / 15 mins</Text>
          </View>
        </View>
        <View style={[styles.direction,styles.suplementContainer]}>
          {
            data.map(({amount,category})=><View>
              <Text style={[styles.color,styles.amountTxt,styles.center]}>
                {amount}
              </Text>
              <Text  style={[styles.color,styles.categoryTxt,styles.center]}>
                {
                  category
                }
              </Text>
            </View>)
          }
        </View>
        <View style={[styles.direction,{justifyContent:'space-between',paddingLeft:pixelSizeHorizontal(21),paddingRight:pixelSizeHorizontal(10)}]}>

      <View style={styles.direction}>

        <Text style={[styles.color]}>Ingredients</Text>
        <Text style={[styles.color,styles.servesTxt]}>2 serves</Text>
      </View>
      <View style={[styles.direction,{borderWidth:1,borderRadius:3,}]}>
        <Text style={styles.color}>-</Text>
        <Text style={styles.color}>+</Text>
      </View>

      </View>
      <FlatList
      data={Ingredients}
renderItem={Item}
keyExtractor={({ingredient})=>ingredient}
/>
 <CustomButtom text={'Start cooking'} btnText={styles.submitText} btnContainer={styles.submitCont}></CustomButtom>
 <FooterLine styles={styles.footer}/>
      </View>
      
    </View>
  )
}

export default RecipeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  contentContainer:{
    flex:1,
    backgroundColor:'#FFFFFF',
    marginTop: -pixelSizeVertical(30),
    zIndex: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  color:{
    color:'black',   
  },
  center:{ textAlign:'center'},
  txt:{
    textAlign:'center'
  },
  ramenTxt:{
    fontSize:fontPixel(14),
    textAlign:'center'
   
  },
  timeTxt:{
    fontSize:fontPixel(7),
    color:'rgba(103, 103, 103, 1)'
  },
  direction:{
    flexDirection:'row'
  },suplementContainer:{
    backgroundColor:'#F4F4F4',
    marginTop:pixelSizeVertical(10),
    justifyContent:'space-between',
    paddingHorizontal:pixelSizeHorizontal(25),
    paddingVertical:pixelSizeVertical(7)
  },
  submitText:{
    fontSize:fontPixel(10),
    color:'white'
  },
  submitCont:{backgroundColor:'rgba(138, 71, 235, 1)',paddingVertical:pixelSizeVertical(10),alignItems:'center',justifyContent:'center',marginTop:pixelSizeVertical(32)},
  amountTxt:{
    fontSize:fontPixel(7)
  },
  categoryTxt:{
    fontSize:fontPixel(9)
  },
  ingredient:{
    fontSize:fontPixel(9),
    
  },ingredientAmount:{
    fontSize:fontPixel(8),
    color:'#B5B5B5'
  },
  footer:{
    marginTop:pixelSizeVertical(20),
    marginBottom:pixelSizeVertical(13),
  },servesTxt:{color:'#A6A6A6',fontSize:fontPixel(7)}
})