import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import FeedbackHeader from '../../components/feedbackHeader/FeedbackHeader';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../utils/ResponsiveDesign.jsx';
import CustomButtom from '../../components/button/CustomButton';

const Feedback = () => {
  const data = [
    'Application bugs',
    'Customer service',
    'Slow loading',
    'Bad navigation',
    'Weak functionality',
    'Other problems',
  ];
  const [state, setState] = useState(data.length - 1);
  return (
    <View style={styles.container}>
      <FeedbackHeader navigate="Notification" />
      <View style={styles.subContainer1}>
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.txt1,
              styles.textColor,
            ]}>{`How was your overall\nexperience?`}</Text>
          <Text style={[styles.txt2, styles.textColor]}>
            It will help us to serve you better.
          </Text>
          <Image
            source={require('../../assets/images/emojis.png')}
            style={styles.emojis}
          />
        </View>

        <Text style={styles.wrong}>What is wrong?</Text>
        <View style={styles.btns}>
          {data.map((item, index) => (
            <Pressable
              key={item}
              style={[
                index == state
                  ? styles.activeContainer
                  : styles.nonActiveContainer,
                styles.btnContainer,
                styles[item.split(' ')[0]],
              ]}
              onPress={() => setState(index)}>
              <Text
                style={[
                  index == state ? styles.activeTxt : styles.nonActiveTxt,
                  ,
                  styles.text,
                ]}>
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.subContainer2}>
        <View style={{flex: 1}}>
          <Text style={[styles.txt2, styles.textColor]}>Notes</Text>
          <TextInput
            style={[styles.txtInput, {verticalAlign: 'top'}]}
            placeholderTextColor={'rgba(201, 201, 201, 1)'}
            placeholder="How we can do better?"
          />
        </View>
        <CustomButtom
          text="Submit Feedback"
          btnText={styles.submitText}
          navigate={'UpgradeScreen'}
          btnContainer={styles.submitCont}></CustomButtom>
      </View>
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  Application: {
    width: widthPixel(82),
  },
  Customer: {
    width: widthPixel(86.6),
  },
  Slow: {
    width: widthPixel(72),
  },
  Bad: {
    width: widthPixel(76),
  },
  Weak: {
    width: widthPixel(91),
  },
  Other: {
    width: widthPixel(76),
  },
  nonActiveContainer: {
    borderColor: 'black',
    borderWidth: 1,
  },
  activeContainer: {
    backgroundColor: '#8A47EB',
    borderWidth: 0,
  },
  subContainer1: {flex: 1.14},
  subContainer2: {flex: 1},
 
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingLeft: pixelSizeHorizontal(15),
    paddingRight: pixelSizeHorizontal(11),
  },
  txt1: {fontSize: fontPixel(14.5), fontFamily: 'SF-Pro-Display-Semibold'},
  txt2: {
    fontSize: fontPixel(10),
    marginBottom: pixelSizeVertical(7),
    fontFamily: 'SF-Pro-Display-Medium',
    lineHeight: fontPixel(10),
  },
  textColor: {
    color: 'rgba(0, 0, 0, 1)',
  },
  textContainer: {
    marginTop: pixelSizeVertical(5),
    gap: pixelSizeVertical(11),
  },
  emojis: {
    width: pixelSizeHorizontal(132),
    height: pixelSizeVertical(30),
    resizeMode: 'contain',
    marginBottom: pixelSizeVertical(4),
  },
  wrong: {
    fontSize: fontPixel(10),
    lineHeight: fontPixel(10),
    color: 'black',
    fontFamily: 'SF-Pro-Display-Medium',
  },
  btnContainer: {

    // paddingHorizontal: pixelSizeHorizontal(6),
    paddingVertical: pixelSizeVertical(1),
    borderRadius: 120,
  },
  btnText: {
    color: 'black',
    fontSize: fontPixel(8.4),
  },
  btns: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: pixelSizeHorizontal(7),
    marginTop: pixelSizeVertical(11),
  },
  submitCont: {
    backgroundColor: 'rgba(138, 71, 235, 1)',
    paddingVertical: pixelSizeVertical(10),
    alignItems: 'center',
    marginBottom: pixelSizeVertical(17),
    justifyContent: 'center',

    borderRadius: 3,
  },
  submitText: {
    fontSize: fontPixel(10),
    color: 'white',
    lineHeight: fontPixel(10),
    fontFamily: 'SF-Pro-Display-Bold',
  },
  txtInput: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    marginBottom: pixelSizeVertical(32),
    paddingLeft: pixelSizeHorizontal(7),
    borderRadius: 7,
  },
  text: {
    fontSize: fontPixel(9),

    textAlign: 'center',
    width: '100%',
  },
  nonActiveTxt: {
    color: 'black',
  },
  activeTxt: {
    color: 'white',
  },
});
