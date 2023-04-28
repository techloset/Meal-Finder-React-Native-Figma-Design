import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
  heightPixel,
} from '../../utils/ResponsiveDesign';
const ChatScreen = () => {
  ChatScreen.path = 'ChatScreen';

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../assets/images/top.png')}
          style={styles.img1}></Image>
        <Image
          source={require('../../assets/images/burger.png')}
          style={styles.img2}></Image>
      </View>
      <Text style={[styles.heading, {marginTop: pixelSizeVertical(5)}]}>
        Your personal nutriotinist
      </Text>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Text style={styles.heading}>Monday 12:38 PM</Text>
        <View
          style={[
            styles.direction,
            {
              alignItems: 'flex-end',
              marginTop: pixelSizeVertical(16),
              paddingLeft: pixelSizeHorizontal(17),
              position: 'relative',
              zIndex: 10,
              gap: pixelSizeHorizontal(6),
            },
          ]}>
          <Image
            source={require('../../assets/images/img.png')}
            style={styles.img}></Image>
          <Image
            source={require('../../assets/images/tt.png')}
            style={styles.tailImg}></Image>
          <Text style={[styles.color, styles.picComment]}>
            {`Let's get lunch. Do you\n like what’s today?`}
          </Text>
        </View>
        <View
          style={[
            styles.direction,
            {
              position: 'relative',
              alignSelf: 'flex-end',

              marginRight: pixelSizeHorizontal(13),
              marginVertical: pixelSizeVertical(9),
              zIndex: 10,
              gap: 5,
            },
          ]}>
          <Image
            source={require('../../assets/images/bb.png')}
            style={styles.tailImgBlue}></Image>
          <Text style={[styles.response]}>
            {`Yes! I love it! I’m enjoying\nfood more than ever.`}
          </Text>
        </View>
        <View style={[styles.direction, styles.inpContainer]}>
          <Image
            source={require('../../assets/images/c.png')}
            style={styles.icon1}></Image>
          <Image
            source={require('../../assets/images/app.png')}
            style={styles.icon2}></Image>
          <View
            style={{
              borderColor: 'rgba(200, 200, 204, 1)',
              borderWidth: 1,
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 1000,
              height: heightPixel(19.5),
            }}>
            <TextInput
              placeholder="Message..."
              placeholderTextColor={'rgba(60, 60, 67, 0.3)'}
              style={[
                styles.color,
                {
                  height: pixelSizeVertical(20),
                  paddingBottom: pixelSizeVertical(2), // adjust this value to fit the placeholder
paddingLeft: pixelSizeHorizontal(8), // adjust this value to fit the placeholder
                },
              ]}
            />
            <View style={{}}>
            <Image
              source={require('../../assets/images/d.png')}
              style={styles.icon3}></Image>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ChatScreen;

const styles = StyleSheet.create({
  inpContainer: {
    gap: 10,
    marginHorizontal: pixelSizeHorizontal(9),
    marginTop: pixelSizeVertical(10),
    marginBottom: pixelSizeVertical(5),
  },
  icon3: {
    width: widthPixel(15.8),
    height: widthPixel(15.8),
marginRight:pixelSizeHorizontal(2),
    resizeMode: 'center',
  },
  icon2: {
    width: widthPixel(20),
    height: heightPixel(15),
    resizeMode: 'contain',
  },
  icon1: {
    width: widthPixel(27),
    height: heightPixel(27),
    resizeMode: 'contain',
    marginBottom: -pixelSizeVertical(8),
  },
  direction: {flexDirection: 'row', alignItems: 'center'},
  imgContainer: {
    marginTop: pixelSizeHorizontal(10),
    marginHorizontal: pixelSizeHorizontal(9),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  heading: {
    color: 'rgba(200, 200, 204, 1)',
    fontSize: fontPixel(9),
    fontFamily: 'SF-Pro-Display-Medium',
    alignSelf: 'center',
  },
  color: {
    color: 'black',
  },
  img: {
    width: widthPixel(19),
    height: heightPixel(19),
    resizeMode: 'contain',
  },
  tailImg: {
    width: widthPixel(12),
    height: heightPixel(8),
    resizeMode: 'contain',
    marginRight: -20,
    marginTop: 15,
    position: 'relative',
    zIndex: 10,
  },
  tailImgBlue: {
    width: widthPixel(12),
    height: heightPixel(8),
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -2,
    right: -2,
    zIndex: 10,
  },
  picComment: {
    backgroundColor: '#E5E5EA',
    paddingVertical: pixelSizeVertical(4),
    paddingHorizontal: pixelSizeHorizontal(8),
    borderRadius: pixelSizeHorizontal(11),
    marginTop: -15,
    fontSize: fontPixel(9),
    elevation: 7,
  },
  response: {
    backgroundColor: '#007AFF',
    color: 'white',
    paddingVertical: pixelSizeVertical(4),
    paddingHorizontal: pixelSizeHorizontal(8),
    borderRadius: pixelSizeHorizontal(11),
    fontSize: fontPixel(9),
  },
});
