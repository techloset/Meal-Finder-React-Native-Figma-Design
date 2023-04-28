import {StyleSheet, Text, View, Image, FlatList, Pressable} from 'react-native';
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
const RecipeScreen = ({route}) => {
  const Ingredients = [
    {
      ingredient: 'Bacon',

      amount: '50 gr',
    },
    {
      ingredient: 'Soy Sauce',

      amount: '200 ml',
    },
  ];
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/v.png')}
        style={{
          width: '100%',
          marginTop: -pixelSizeVertical(20),
          height: heightPixel(201),
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
          <View style={{flexGrow: 1}}>
            <Text style={[styles.txt, styles.color, styles.ramenTxt]}>
              Step 4
            </Text>
            <View style={styles.btns}>
              {[1, 2, 3, 4].map((item, index) => (
                <Pressable
                  key={index}
                  style={[styles.slideBtn, styles[`btn${item}`]]}>
                  {index == 3 ? (
                    <View style={{backgroundColor: '#8A47EB'}}>
                      <Image
                        source={require('../../assets/images/flag.png')}
                        style={{
                          width: widthPixel(4.03),
                          height: heightPixel(5.5),
                          resizeMode: 'contain',
                        }}></Image>
                    </View>
                  ) : (
                    <Text style={[styles.slideBtnText, {color: 'black'}]}>
                      {item}
                    </Text>
                  )}
                </Pressable>
              ))}
            </View>
          </View>
        </View>
<View style={{flexGrow:1,justifyContent:'flex-start',}}>

      <View>
      <FlatList
          data={Ingredients}
          renderItem={Item}
          keyExtractor={({ingredient}) => ingredient}
          style={[styles.contentSpacing]}
          />
      </View>
       
       <Text
          style={[
            styles.color,
            {
              
              marginLeft: pixelSizeHorizontal(25),
              marginRight: pixelSizeHorizontal(20),
              marginTop: pixelSizeVertical(14),
              fontSize:fontPixel(9),
              lineHeight:fontPixel(12)
            },
          ]}>
          {`We tie the bacon with twine so that the skin is on the outside and one end and the other practically meet. Heat a little oil in a pressure cooker and mark the bacon all over until golden brown. We remove and discard the oil.`}
        </Text>
            </View>
        <View style={[styles.btnContainer, {  marginLeft:pixelSizeHorizontal(12),marginRight:pixelSizeHorizontal(14)}]}>
          {['Previous', 'Finish cook'].map((item, index) => (
            <CustomButtom
              text={item}
              key={item}
              btnContainer={[styles[`${item.split(' ')[0]}`],styles.btnCommon]}
              navigate={item == 'Previous' ? 'RecipeScreen' : 'Tabs'}
              path={index == 1 && require('../../assets/images/white.png')}
              btnText={[styles[`text${item.split(' ')[0]}`], styles.btnText]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  btnCommon:{
    marginBottom:pixelSizeVertical(20)

  },
  btnContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: pixelSizeHorizontal(12),
  },
  Finish: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8A47EB',
    borderRadius: 5,
    flex: 1,
    flexDirection:'row',
    gap:pixelSizeHorizontal(4)
  },
  Previous: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
  },

  textPrevious: {color: 'black'},
  btnText: {
    fontSize: fontPixel(10),
    fontFamily: 'SF-Pro-Display-Bold',
    paddingVertical: pixelSizeVertical(7),
  },

  textFinish: {color: 'white'},
  btn1: {
    borderColor: 'black',
    borderWidth: 1,
  },
  btn2: {
    color: '#FFFFFF',
    borderColor: 'black',
    borderWidth: 1,
  },
  btn3: {
    borderColor: 'black',
    borderWidth: 1,
  },
  btn4: {
    backgroundColor: '#8A47EB',
  },
  btns: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: pixelSizeVertical(7),
  },
  slideBtn: {
    height: heightPixel(13),
    width: widthPixel(13),
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: pixelSizeHorizontal(5),
  },

  slideBtnText: {
    fontSize: fontPixel(7),
  },
  ingredientTxt: {
    fontSize: fontPixel(9),
    lineHeight: fontPixel(9),
    fontFamily: 'SF-Pro-Display-Medium',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    zIndex: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  contentSpacing: {
    marginHorizontal: pixelSizeHorizontal(13),
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
    textAlign: 'center',
    fontFamily: 'SF-Pro-Display-Semibold',
  },
  timeTxt: {
    fontSize: fontPixel(7),
    lineHeight: fontPixel(7),
    color: 'rgba(103, 103, 103, 1)',
    fontFamily: 'SF-Pro-Display-Semibold',
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
    fontFamily: 'SF-Pro-Display-Bold',
  },
  submitCont: {
    backgroundColor: 'rgba(138, 71, 235, 1)',
    paddingVertical: pixelSizeVertical(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: pixelSizeVertical(11),
  },
  amountTxt: {
    fontSize: fontPixel(7),
  },
  categoryTxt: {
    fontSize: fontPixel(9),

    fontFamily: 'SF-Pro-Display-Medium',
  },
  ingredient: {
    fontSize: fontPixel(9.5),
    lineHeight: fontPixel(9.5),
    fontFamily: 'SF-Pro-Display-Medium',
  },
  ingredientAmount: {
    fontSize: fontPixel(8),

    color: 'black',
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
    borderBottomColor: '#EBEBEB',
    borderBottomWidth: 1,
    paddingHorizontal: pixelSizeHorizontal(12),
    paddingVertical: pixelSizeVertical(8),
    
  },
  shadow: {
    height: heightPixel(24),
    position: 'absolute',
    bottom: 0,
  },
});
