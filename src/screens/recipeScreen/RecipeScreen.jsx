import {StyleSheet, Text, View, Image, FlatList,Pressable} from 'react-native';
import React from 'react';
import {
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
  pixelSizeVertical,
  fontPixel,
} from '../../utils/ResponsiveDesign';
import CustomButtom from '../../components/button/CustomButton';
const Item = ({item}) => {
  console.log(item);
  const {ingredient, amount} = item;
  return (
    <View style={styles.flatRenderContent}>
      <Text style={[styles.ingredient, styles.color]}>{ingredient}</Text>
      <Text style={styles.ingredientAmount}>{amount}</Text>
    </View>
  );
};
import {useNavigation} from '@react-navigation/native';
const RecipeScreen = ({route}) => {
  const navigation = useNavigation();
  const data = [
    {
      amount: '100 k',
      category: 'Energy',
    },
    {
      amount: '15 g',
      category: 'Protein',
    },
    {
      amount: '58 g',
      category: 'Carbs',
    },
    {
      amount: '20 g',
      category: 'Fat',
    },
  ];
  const Ingredients = [
    {
      ingredient: 'Chicken breasts',
      amount: '250 g',
    },
    {
      ingredient: 'Unsalted butter',
      amount: '1 tbsp',
    },
    {
      ingredient: 'Sesame or vegetable oil',
      amount: '2 tsp',
    },
    {
      ingredient: 'Fresh ginger',
      amount: '20 tsp',
    },
    {
      ingredient: 'Large eggs',

      amount: '100 g',
    },
    {
      ingredient: 'Large eggs',

      amount: '22 g',
    },
    {
      ingredient: 'Large eggs',

      amount: '120 g',
    },
  ];
  return (
    <View style={styles.container}>
      <View 
          style={styles.imgArrowContainer}
      
      >

       <Pressable
          onPress={() => navigation.navigate('Tabs')}
          >
          <Image
            source={require('../../assets/images/arrow.png')}
            style={styles.imgArrow}></Image>
        </Pressable>
          <Image
            source={require('../../assets/images/dots.png')}
            style={styles.dotsImg}></Image>
          </View>
      <Image
        source={require('../../assets/images/r.png')}
        style={{
          width: '100%',
          height: heightPixel(215),
          resizeMode: 'cover',
        }}></Image>
      <View style={styles.contentContainer}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: pixelSizeVertical(11),
            paddingLeft: pixelSizeHorizontal(15),
            paddingRight: pixelSizeHorizontal(10),
          }}>
          <Image source={require('../../assets/images/reload.png')}></Image>
          <View style={{flexGrow: 1}}>
            <Text style={[styles.txt, styles.color, styles.ramenTxt]}>
              Ramen
            </Text>
            <Text style={[styles.txt, styles.timeTxt]}>Lunch / 15 mins</Text>
          </View>
        </View>
        <View style={[styles.direction, styles.suplementContainer]}>
          {data.map(({amount, category}) => (
            <View>
              <Text style={[styles.color, styles.amountTxt, styles.center]}>
                {amount}
              </Text>
              <Text style={[styles.color, styles.categoryTxt, styles.center]}>
                {category}
              </Text>
            </View>
          ))}
        </View>
        <View
          style={[
            styles.direction,
            styles.ingredientsContainer,
            styles.contentSpacing,
          ]}>
          <View style={[styles.direction, styles.servesContainer]}>
            <Text style={[styles.color,styles.ingredientTxt]}>Ingredients</Text>
            <Text style={[styles.color, styles.servesTxt]}>2 serves</Text>
          </View>
          <View style={[styles.direction, styles.plusMinusContainer]}>
            <Image
              source={require('../../assets/images/minus.png')}
              style={styles.plusMinus}></Image>
            <View style={styles.plusMinusLine}></View>
            <Image
              source={require('../../assets/images/plus.png')}
              style={styles.plusMinus}></Image>
          </View>
        </View>
        <FlatList
          data={Ingredients}
          renderItem={Item}
          keyExtractor={({ingredient}) => ingredient}
          style={styles.contentSpacing}
        />
        <View style={{}}>
          <Image
            source={require('../../assets/images/shadow.png')}
            style={styles.shadow}></Image>
        </View>
        <CustomButtom
          text={'Start cooking'}
          btnText={styles.submitText}
          navigate='PreparationScreen'
          btnContainer={[
            styles.submitCont,
            styles.contentSpacing,
          ]}></CustomButtom>
      </View>
    </View>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  imgArrowContainer: {
    position: 'absolute',
    zIndex: 100,
    marginTop: pixelSizeVertical(13),
    paddingLeft: pixelSizeHorizontal(11),
    flexDirection:"row",
justifyContent:'space-between',
alignItems:'center',
paddingRight:pixelSizeHorizontal(10),
width:'100%'
  },
  dotsImg:{
    width:widthPixel(13),height:widthPixel(13)
  },
  ingredientTxt:{fontSize:fontPixel(9),lineHeight:fontPixel(9),    fontFamily:'SF-Pro-Display-Medium'},
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: -pixelSizeVertical(30),
    zIndex: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  contentSpacing: {
    marginLeft: pixelSizeHorizontal(21),
    marginRight: pixelSizeHorizontal(10),
  },
  color: {
    color: 'black',
  },
  center: {textAlign: 'center'},
  txt: {
    textAlign: 'center',
  },
  ramenTxt: {
    fontSize: fontPixel(14),
    lineHeight: fontPixel(14),
    marginBottom:pixelSizeVertical(4),
    textAlign: 'center',
    fontFamily:'SF-Pro-Display-Semibold'
  },
  timeTxt: {
    fontSize: fontPixel(7),
    lineHeight: fontPixel(7),
    color: 'rgba(103, 103, 103, 1)',
    fontFamily:'SF-Pro-Display-Semibold'
  },
  direction: {
    flexDirection: 'row',
  },
  suplementContainer: {
    backgroundColor: '#F4F4F4',
    marginTop: pixelSizeVertical(10),
    justifyContent: 'space-between',
    paddingHorizontal: pixelSizeHorizontal(25),
    paddingVertical: pixelSizeVertical(7),
  },
  submitText: {
    fontSize: fontPixel(10),
    lineHeight: fontPixel(10),
    color: 'white',
    fontFamily:'SF-Pro-Display-Bold'
  },
  submitCont: {
    backgroundColor: 'rgba(138, 71, 235, 1)',
    paddingVertical: pixelSizeVertical(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5,
    marginTop: pixelSizeVertical(11),
    marginBottom:pixelSizeVertical(20)
  },
  amountTxt: {
    fontSize: fontPixel(7),
  },
  categoryTxt: {
    fontSize: fontPixel(9),
   
    fontFamily:'SF-Pro-Display-Medium'
  },
  ingredient: {
    fontSize: fontPixel(9),
  },
  ingredientAmount: {
    fontSize: fontPixel(8),
    color: '#B5B5B5',
  },
  footer: {
    marginTop: pixelSizeVertical(20),
    marginBottom: pixelSizeVertical(13),
  },
  servesTxt: {color: '#A6A6A6', fontSize: fontPixel(7)},
  ingredientsContainer: {
    justifyContent: 'space-between',
    paddingVertical: pixelSizeVertical(11),
  },
  plusMinusContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: pixelSizeHorizontal(5),
    alignItems: 'center',
    width: widthPixel(37),
    height: heightPixel(13),
    borderWidth: 1,
    borderRadius: 3,
  },
  plusMinus: {
    width: widthPixel(7.7),
    height: heightPixel(7.7),
  },
  plusMinusLine: {width: 1, height: '100%', backgroundColor: 'black'},
  servesContainer: {alignItems: 'center', gap: pixelSizeHorizontal(3.5)},
  flatRenderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: pixelSizeVertical(7),
  },
  shadow: {
    height: heightPixel(24),
    position: 'absolute',
    bottom: 0,
  },
});
